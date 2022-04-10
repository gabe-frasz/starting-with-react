import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import * as icon from "../../public/wand-icon.png";
import * as obj from "../../config.json";

const MyPopover = ({ onStickerClick }) => (
    <Popover.Root>
        <Popover.Trigger>
            <div className="relative w-6 aspect-square ml-4">
                <Image src={icon} alt="sticker-content-trigger" layout="fill" />
            </div>
        </Popover.Trigger>

        <Popover.Content side="top" alignOffset={-18}>
            <div className="w-56 sm:w-72 md:w-96 p-4 flex flex-col bg-slate-900 text-slate-100 rounded-md">
                <div className="h-6 mb-4 flex flex-row-reverse justify-between">
                    <Popover.Close>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-x w-6"
                            viewBox="0 0 16 16"
                        >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </Popover.Close>

                    <h4 className="text-xl">Stickers</h4>
                </div>

                <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4 overflow-y-scroll">
                    {obj.stickers.map((el, i) => {
                        return (
                            <div
                                key={i}
                                className="relative w-auto aspect-square cursor-pointer"
                                onClick={() => {
                                    onStickerClick(el);
                                }}
                            >
                                <Image
                                    src={el}
                                    alt={`sticker-${i}`}
                                    layout="fill"
                                    className="object-cover rounded-md"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                div.w-56 {
                    min-height: 200px;
                    max-height: 60vh;
                }
                @media (min-width: 1024px) {
                    div.w-56 {
                        width: 500px;
                    }
                }
                div.flex-1::-webkit-scrollbar {
                    width: 7px;
                }
                div.flex-1::-webkit-scrollbar-track {
                    background: transparent;
                }
                div.flex-1::-webkit-scrollbar-thumb {
                    background: #00000055;
                    border-radius: 3px;
                }
            `}</style>
        </Popover.Content>
        <Popover.Anchor />
    </Popover.Root>
);

export default MyPopover;
