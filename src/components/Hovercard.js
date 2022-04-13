import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";

const MyHovercard = ({ user }) => {
    return (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                <div className="relative w-8 aspect-square mr-2">
                    <Image
                        src={`https://github.com/${user.from}.png`}
                        alt="user picture"
                        layout="fill"
                        className="rounded-full"
                        priority
                    />
                </div>
            </HoverCard.Trigger>

            <HoverCard.Content side="top" align="end" alignOffset={-50}>
                <div className="w-auto p-4 bg-slate-900 text-slate-100 rounded-md">
                    <div className="relative w-12 mb-2 aspect-square">
                        <Image
                            src={`https://github.com/${user.from}.png`}
                            alt="user picture"
                            layout="fill"
                            className="rounded-full"
                            priority
                        />
                    </div>

                    <h4>{user.name}</h4>
                    <a
                        href={`https://github.com/${user.from}`}
                        className="mb-4 text-slate-500"
                    >
                        {user.from}
                    </a>

                    <p className="mb-2">{user.bio}</p>

                    <div className="flex">
                        <p className="mr-4 text-slate-500">
                            <span className="text-slate-100">
                                {user.followers}
                            </span>{" "}
                            followers
                        </p>

                        <p className="text-slate-500">
                            <span className="text-slate-100">{user.repos}</span>{" "}
                            public repos
                        </p>
                    </div>
                </div>

                <style jsx>{`
                    div.w-auto {
                        max-width: 75vw;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                `}</style>

                <HoverCard.Arrow offset={60} />
            </HoverCard.Content>
        </HoverCard.Root>
    );
};

export default MyHovercard;
