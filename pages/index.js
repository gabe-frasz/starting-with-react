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
                    content="My first project with React"
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
