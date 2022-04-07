export function Box({ tag, className, children }) {
    const Tag = tag ?? "div";

    return <Tag className={className}>{children}</Tag>;
}

export function Title({ tag, className, children }) {
    const Tag = tag ?? "h1";

    return <Tag className={className}>{children}</Tag>;
}

export function Text({ tag, className, children }) {
    const Tag = tag ?? "p";

    return <Tag className={className}>{children}</Tag>;
}

export function TextField({ tag, tftype, placeholder, className, children }) {
    const Tag = tag ?? "input";
    const type = tftype ?? "text";

    return (
        <Tag type={type} placeholder={placeholder} className={className}>
            {children}
        </Tag>
    );
}

export function Button({ btype, className, children }) {
    const type = btype ?? "button";

    return (
        <button type={type} className={className}>
            {children}
        </button>
    );
}

export function ProfileDesc({ className, children }) {
    return (
        <Title className="w-fit px-2 py-1 text-sm bg-black rounded-full">
            {children}
        </Title>
    );
}
