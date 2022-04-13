import Head from "next/head";
import { Box } from "../src/components/basics";
import Modal from "../src/components/modal";

export default function Home() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>Alura Potter | Login</title>
                <meta
                    name="description"
                    content="My first project with React, built with Alura and Dev Soutinho. Simple harry potter themed chat app"
                />

                <meta property="og:title" content="Aluracord | Alura Potter" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://starting-with-react-murex.vercel.app/"
                />
                <meta
                    property="og:image"
                    content="blob:https://vercel.com/634b2b95-83d2-47c5-8bbd-5ffe359e86af"
                />

                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#1e3a8a" />
            </Head>

            <Box
                tag="main"
                className="w-screen h-full flex justify-center items-center bg-blue-900 text-slate-50"
            >
                <Modal />
            </Box>
        </>
    );
}
