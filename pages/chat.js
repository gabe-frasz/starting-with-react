import { Box, TextField, Title, Text } from "../src/components/basics";
import Image from "next/dist/client/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Skeleton } from "../src/components/skeleton";
import MyPopover from "../src/components/Popover";

const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZ2xhbnFpamthc3d6YXZjZmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk1MTc5NzQsImV4cCI6MTk2NTA5Mzk3NH0.1CNdpHcttvkxEgJazM0RylmyUcS6r0iLvKCSnSb5x9w",
    SUPABASE_URL = "https://mjglanqijkaswzavcfez.supabase.co",
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function listenToNewMessages(addMessage) {
    return supabaseClient
        .from("messages")
        .on("INSERT", (update) => {
            addMessage(update.new);
        })
        .subscribe();
}

export default function ChatPage() {
    const [message, setMessage] = useState(""),
        [messagesList, setMessagesList] = useState([]),
        [loaded, setLoaded] = useState(false),
        [hideSkeleton, setHideSkeleton] = useState("block"),
        router = useRouter(),
        loggedUser = router.query.username;

    useEffect(() => {
        supabaseClient
            .from("messages")
            .select("*")
            .order("id", { ascending: false })
            .then(({ data }) => {
                setMessagesList(data);
                setLoaded(true);
            });

        listenToNewMessages((newData) => {
            setMessagesList([newData, ...messagesList]);
        });
    });

    useEffect(() => {
        setHideSkeleton("hidden");
    }, [loaded]);

    function updateMessagesList(isSticker) {
        if (message == "" && !isSticker) {
            return;
        }

        const newMessage = {
            from: loggedUser,
            text: message,
        };

        if (isSticker) {
            newMessage.text = isSticker;
        }

        supabaseClient
            .from("messages")
            .insert([newMessage])
            .then((res) => {});
    }

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>Alura Potter | Chat</title>
                <meta
                    name="description"
                    content="My first project with React"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#1e3a8a" />
            </Head>

            <Box
                tag="main"
                className="w-screen h-screen py-8 flex justify-center items-center bg-blue-900 text-slate-50"
            >
                <Box className="w-4/5 h-full lg:h-auto lg:aspect-video px-4 py-8 flex flex-col bg-slate-800 rounded-md">
                    <Header />

                    <Box className=" p-4 flex-1 flex flex-col bg-slate-700 rounded-md overflow-y-hidden">
                        <MessageList
                            msg={messagesList}
                            state={setMessagesList}
                            dskeleton={hideSkeleton}
                        />

                        <Box className="flex">
                            <TextField
                                tabIndex={2}
                                value={message}
                                placeholder="Insira sua mensagem aqui..."
                                className="w-12 px-2 py-3 flex-1 bg-slate-800 rounded-md"
                                onChange={(event) => {
                                    setMessage(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    if (event.key != "Enter") {
                                        return;
                                    }
                                    event.preventDefault();
                                    updateMessagesList();
                                    setMessage("");
                                }}
                            />

                            <svg
                                tabIndex={3}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-send-fill w-6 md:w-8 ml-6 mr-2 fill-slate-400 cursor-pointer lg:hidden"
                                viewBox="0 0 16 16"
                                onClick={() => {
                                    updateMessagesList();
                                    setMessage("");
                                    document.querySelector("input").focus();
                                }}
                            >
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                            </svg>

                            <MyPopover
                                onStickerClick={(sticker) => {
                                    updateMessagesList(`:sticker: ${sticker}`);
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

function Header() {
    return (
        <Box className="mb-6 flex justify-between items-center">
            <Title className="text-2xl font-semibold">Chat</Title>

            <Link href="/" passHref={true}>
                <a tabIndex={1} className="p-2 hover:bg-slate-600 rounded-md">
                    Logout
                </a>
            </Link>
        </Box>
    );
}

function MessageList({ msg, dskeleton, state }) {
    return (
        <Box
            tag="ul"
            className="w-full flex-1 flex flex-col-reverse justify-start overflow-y-scroll"
        >
            {msg.map((el) => {
                el.created_at = Array.from(el.created_at)
                    .splice(0, 10)
                    .join("")
                    .replace("-", "/");

                return (
                    <>
                        <Box
                            tag="li"
                            key={el.id}
                            datakey={el.id}
                            className="my-1 py-1 hover:px-1 hover:bg-slate-600 rounded-md"
                        >
                            <Box className="flex justify-between items-center">
                                <Box className="flex items-center">
                                    <Box className="relative w-8 aspect-square mr-2">
                                        <Image
                                            src={`https://github.com/${el.from}.png`}
                                            alt="user picture"
                                            layout="fill"
                                            className="rounded-full"
                                            priority
                                        />
                                    </Box>

                                    <Box className="flex flex-col justify-center items-center md:flex-row">
                                        <Text className="mr-2 text-slate-400">
                                            {el.from}
                                        </Text>

                                        <Text className="text-xs text-slate-400">
                                            {el.created_at}
                                        </Text>
                                    </Box>
                                </Box>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="bi bi-x-circle-fill w-4 mr-2 fill-slate-300 hover:fill-slate-400 opacity-0 cursor-pointer"
                                    viewBox="0 0 16 16"
                                    onClick={(event) => {
                                        supabaseClient
                                            .from("messages")
                                            .delete({
                                                returning: "representation",
                                            })
                                            .match({
                                                id: event.target
                                                    .closest("li")
                                                    .getAttribute("datakey"),
                                            })
                                            .then(() => {
                                                let arrFilter = msg.filter(
                                                    (li) => {
                                                        return (
                                                            li.id !=
                                                            Number(
                                                                event.target
                                                                    .closest(
                                                                        "li"
                                                                    )
                                                                    .getAttribute(
                                                                        "datakey"
                                                                    )
                                                            )
                                                        );
                                                    }
                                                );

                                                state(arrFilter);
                                            });
                                    }}
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>
                            </Box>

                            {el.text.startsWith(":sticker: ") ? (
                                <div className="relative w-36 sm:w-52 lg:w-72 aspect-video">
                                    <Image
                                        src={el.text.replace(":sticker: ", "")}
                                        alt=":sticker:"
                                        layout="fill"
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <Text className="mt-2">{el.text}</Text>
                            )}
                        </Box>
                    </>
                );
            })}

            <Skeleton display={dskeleton} />
            <Skeleton display={dskeleton} />
            <Skeleton display={dskeleton} />
            <Skeleton display={dskeleton} />
            <Skeleton display={dskeleton} />
            <Skeleton display={dskeleton} />
        </Box>
    );
}
