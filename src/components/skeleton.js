export function Skeleton({ display }) {
    return (
        <>
            <li className={`my-2 ${display}`}>
                <div className="flex items-center">
                    <div className="w-8 aspect-square mr-2 rounded-full"></div>

                    <div className="w-40 h-3 rounded-sm"></div>
                </div>

                <div className="w-72 h-4 mt-2 rounded-sm"></div>
            </li>

            <style jsx>{`
                *:not(li, li > div:nth-child(1)) {
                    background: gray;
                    animation: skeleton 1s linear alternate infinite;
                }

                @keyframes skeleton {
                    0% {
                        opacity: 0.8;
                    }
                    100% {
                        opacity: 0.3;
                    }
                }
            `}</style>
        </>
    );
}
