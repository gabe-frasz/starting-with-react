export function Box({ tag, method, datakey, className, onSubmit, children }) {
    const Tag = tag ?? "div";
    const fmethod = method ?? "";
    const submit = onSubmit ?? null;
    const dKey = datakey ?? null;

    if (!fmethod) {
        return (
            <Tag datakey={dKey} className={className} onSubmit={submit}>
                {children}
            </Tag>
        );
    }

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
    onKeyPress,
}) {
    const Tag = tag ?? "input";
    const tftype = type ?? "text";
    let tfvalue = value ?? "";
    const change = onChange ?? null;
    const keyPress = onKeyPress ?? null;

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
