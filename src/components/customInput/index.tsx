import classNames from "classnames";
import React from "react";

export default function CustomInput({
    children,
    ...props
}: {
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={classNames(
                "select-none px-6 py-3 cursor-pointer rounded-[4rem] bg-gradient-to-r hover:bg-gradient-to-l from-primary to-secondary flex-0 text-white-2",
                props.className
            )}
        >
            {children}
        </button>
    );
}
