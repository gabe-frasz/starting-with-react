import Head from "next/head";
import { Box } from "../components/basics";
import Modal from "../components/modal";

export default function Home() {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <title>Discord | Alura Potter</title>
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
