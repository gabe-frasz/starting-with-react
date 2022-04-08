export function Box({ tag, method, className, onSubmit, children }) {
    const Tag = tag ?? "div";
    const fmethod = method ?? "get";
    const submit = onSubmit ?? null;

    return (
        <Tag method={fmethod} className={className} onSubmit={submit}>
            {children}
        </Tag>
    );
}

export function Title({ tag, className, children }) {
    const Tag = tag ?? "h1";

    return <Tag className={className}>{children}</Tag>;
}

export function Text({ tag, className, children }) {
    const Tag = tag ?? "p";

    return <Tag className={className}>{children}</Tag>;
}

export function TextField({
    tag,
    type,
    value,
    placeholder,
    className,
    children,
    onChange,
}) {
    const Tag = tag ?? "input";
    const tftype = type ?? "text";
    let tfvalue = value ?? "";
    const change = onChange ?? "";

    return (
        <Tag
            type={tftype}
            value={tfvalue}
            placeholder={placeholder}
            className={className}
            onChange={change}
        >
            {children}
        </Tag>
    );
}

export function Button({ type, className, children }) {
    const btype = type ?? "button";

    return (
        <button type={btype} className={className}>
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
