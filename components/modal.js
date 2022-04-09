import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Box, Button, ProfileDesc, Text, TextField, Title } from "./basics";

export default function Modal() {
    const [username, setUsername] = useState(""),
        router = useRouter(),
        [imgError, setImgError] = useState(false),
        fallbackImg =
            "https://ogimg.infoglobo.com.br/in/24440303-24f-31c/FT1086A/87996533_SCAtor-Daniel-Redcliff-como-Harry-Potter.-Foto-Divulgacao.jpg";

    let value;

    return (
        <Box className="w-4/5 md:w-3/4 p-4 md:p-8 flex flex-col md:flex-row md:items-center text-center bg-slate-800 rounded-md">
            <Box className="mb-8 md:mr-8 flex-1">
                <Title className="text-5xl font-semibold">Welcome!</Title>

                <Text className="mt-2 mb-8 text-slate-400">
                    Discord | Alura Potter
                </Text>

                <Box
                    tag="form"
                    method="get"
                    className="w-full flex flex-col"
                    onSubmit={(event) => {
                        event.preventDefault();

                        if (imgError) {
                            return;
                        }

                        router.push("/chat");
                    }}
                >
                    <TextField
                        value={username}
                        placeholder="Type your GitHub username..."
                        className="mb-2 px-1 py-2 bg-slate-900 rounded-md focus:outline-slate-50"
                        onChange={(event) => {
                            value = event.target.value;
                            setUsername(value);
                            setImgError(false);
                        }}
                    />

                    <Button
                        type="submit"
                        className="w-full py-2 bg-blue-900 rounded-md"
                    >
                        Enter
                    </Button>
                </Box>
            </Box>

            <Box
                className={`w-full md:w-1/3 p-4 flex flex-col justify-center items-center bg-slate-900 border-2 border-black rounded-md`}
            >
                <Box className="img-login relative w-3/4 aspect-square mb-4 rounded-full">
                    <Image
                        src={
                            imgError
                                ? fallbackImg
                                : `https://github.com/${username}.png`
                        }
                        alt="user picture"
                        layout="fill"
                        className="rounded-full object-cover"
                        priority
                        onError={() => {
                            setImgError(true);
                        }}
                    />
                </Box>

                <ProfileDesc>{username}</ProfileDesc>
            </Box>
        </Box>
    );
}
