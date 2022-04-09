import { Box, TextField, Title, Text } from "../components/basics";
import Image from "next/dist/client/image";
import { useState } from "react";
import Link from "next/link";

export default function ChatPage() {
    const [message, setMessage] = useState(""),
        [messagesList, setMessagesList] = useState([]);

    function updateMessagesList() {
        if (message == "") {
            return;
        }

        const newMessage = {
            id: messagesList.length + 1,
            from: "slyCooper-n",
            date: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
            text: message,
        };
        setMessagesList([newMessage, ...messagesList]);
    }

    return (
        <>
            <Box
                tag="main"
                className="w-screen h-full py-8 flex justify-center items-center bg-blue-900 text-slate-50"
            >
                <Box className="w-4/5 h-full md:h-auto md:aspect-video px-4 py-8 flex flex-col bg-slate-800 rounded-md">
                    <Header />

                    <Box className=" p-4 flex-1 flex flex-col bg-slate-700 rounded-md overflow-y-hidden">
                        <MessageList
                            msg={messagesList}
                            state={setMessagesList}
                        />

                        <Box className="flex">
                            <TextField
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
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-send-fill w-6 md:w-8 ml-6 mr-2 fill-slate-300 cursor-pointer"
                                viewBox="0 0 16 16"
                                onClick={() => {
                                    updateMessagesList();
                                    setMessage("");
                                }}
                            >
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                            </svg>
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
                <a className="p-2 hover:bg-slate-600 rounded-md">Logout</a>
            </Link>
        </Box>
    );
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            className="w-full flex-1 flex flex-col-reverse justify-start overflow-y-scroll"
        >
            {props.msg.map((el) => {
                return (
                    <>
                        <Box
                            tag="li"
                            key={el.id}
                            dataKey={el.id}
                            className="my-1 py-1 hover:px-1 hover:bg-slate-600 rounded-md"
                        >
                            <Box className="flex justify-between items-center">
                                <Box className="flex items-center">
                                    <Box className="relative w-8 aspect-square mr-2">
                                        <Image
                                            src={`https://github.com/slyCooper-n.png`}
                                            alt="user picture"
                                            layout="fill"
                                            className="rounded-full"
                                            priority
                                        />
                                    </Box>
                                    <Text className="mr-2 text-slate-400">
                                        {el.from}
                                    </Text>
                                    <Text className="text-xs text-slate-400">
                                        {el.date}
                                    </Text>
                                </Box>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="bi bi-x-circle-fill w-4 mr-2 fill-slate-300 hover:fill-slate-400 opacity-0 cursor-pointer"
                                    viewBox="0 0 16 16"
                                    onClick={(event) => {
                                        let arrFilter = props.msg.filter(
                                            (li) =>
                                                li.id !=
                                                event.target
                                                    .closest("li")
                                                    .getAttribute("dataKey")
                                        );

                                        props.state(arrFilter);
                                    }}
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>
                            </Box>

                            <Text className="mt-2">{el.text}</Text>
                        </Box>
                    </>
                );
            })}
        </Box>
    );
}
