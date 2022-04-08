import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Box, Button, ProfileDesc, Text, TextField, Title } from "./basics";

export function Modal() {
    const [username, setUsername] = useState("slyCooper-n"),
        router = useRouter(),
        [displayImage, setDisplayImage] = useState("block");

    let value, res, resJSON;

    // async function getUserJSON() {
    //     res = await fetch(`https://api.github.com/users/${value}`);
    //     resJSON = await res.json();
    //     if (resJSON.message) {
    //         return resJSON.message;
    //     }
    // }

    return (
        <Box className="w-4/5 md:w-3/4 p-4 md:p-8 flex flex-col md:flex-row md:items-center text-center bg-slate-800 rounded-md">
            <Box className="mb-8 md:mr-8 flex-1">
                <Title className="text-5xl font-semibold">Boas Vindas!</Title>

                <Text className="mt-2 mb-8 text-slate-400">
                    Discord | Alura Potter
                </Text>

                <Box
                    tag="form"
                    className="w-full flex flex-col"
                    onSubmit={(event) => {
                        event.preventDefault();

                        router.push("/chat");
                    }}
                >
                    <TextField
                        value={username}
                        placeholder="Digite seu nome de usuário do Github"
                        className="mb-2 px-1 py-2 bg-slate-900 rounded-md focus:outline-slate-50"
                        onChange={(event) => {
                            value = event.target.value;
                            setUsername(value);
                            // getUserJSON();

                            if (value.length < 3) {
                                setDisplayImage("hidden");
                                return;
                            }
                            setDisplayImage("block");
                        }}
                    />

                    <Button
                        type="submit"
                        className="w-full py-2 bg-blue-900 rounded-md"
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>

            <Box
                className={`w-full md:w-1/3 p-4 flex flex-col justify-center items-center bg-slate-900 border-2 border-black rounded-md ${displayImage}`}
            >
                <Box className="relative w-3/4 aspect-square mb-4">
                    <Image
                        src={`https://github.com/${username}.png`}
                        alt="user picture"
                        layout="fill"
                        className="rounded-full"
                        priority
                    />
                </Box>

                <ProfileDesc>{username}</ProfileDesc>
            </Box>
        </Box>
    );
}
