import { Box, Button, TextField, Title, Text } from "../components/basics";
import Image from "next/dist/client/image";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function ChatPage() {
    const [message, setMessage] = useState(""),
        [messagesList, setMessagesList] = useState([]),
        router = useRouter();

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
                className="w-screen h-full flex justify-center items-center bg-blue-900 text-slate-50"
            >
                <Box className="w-4/5 px-4 py-8 bg-slate-800 rounded-md">
                    <Header />

                    <Box className="h-96 p-4 flex flex-col bg-slate-700 rounded-md">
                        <MessageList msg={messagesList} />

                        <TextField
                            value={message}
                            placeholder="Insira sua mensagem aqui..."
                            className="px-2 py-3 bg-slate-800 rounded-md"
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

            <Button className="p-2 hover:bg-slate-600 rounded-md">
                Logout
            </Button>
        </Box>
    );
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            className="w-full h-full flex flex-col-reverse justify-start overflow-y-scroll"
        >
            {props.msg.map((el) => {
                return (
                    <>
                        <Box
                            tag="li"
                            key={el.id}
                            className="my-1 py-1 hover:px-1 hover:bg-slate-600 rounded-md"
                        >
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

                            <Text className="mt-2">{el.text}</Text>
                        </Box>
                    </>
                );
            })}
        </Box>
    );
}
