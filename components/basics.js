export function Box({ tag, method, datakey, className, onSubmit, children }) {
    const Tag = tag ?? "div",
        fmethod = method ?? null,
        submit = onSubmit ?? null,
        dKey = datakey ?? null;

    return (
        <Tag
            datakey={dKey}
            method={fmethod}
            className={className}
            onSubmit={submit}
        >
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
    onKeyPress,
}) {
    const Tag = tag ?? "input";
    const tftype = type ?? "text";
    const change = onChange ?? null;
    const keyPress = onKeyPress ?? null;
    let tfvalue = value ?? "";

    return (
        <Tag
            type={tftype}
            value={tfvalue}
            placeholder={placeholder}
            className={className}
            onChange={change}
            onKeyPress={keyPress}
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

export function ProfileDesc({ children }) {
    return (
        <Title className="w-fit px-2 py-1 text-sm bg-black rounded-full">
            {children}
        </Title>
    );
}
