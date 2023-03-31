import { useState } from "react";
import classNames from "classnames";
import "./style.scss";
import CustomInput from "../customInput";
function HamburgerIcon({
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`icon-bar-menu ${props.className}`}
            onClick={(event) => {
                if (props.onClick) props.onClick(event);
                event.currentTarget.classList.toggle("opened");
                event.currentTarget.setAttribute(
                    "aria-expanded",
                    event.currentTarget.classList.contains("opened")
                        ? "true"
                        : "false"
                );
            }}
            aria-label="Main Menu"
        >
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
            >
                <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path
                    className="line line2"
                    d="M 20,50 H 80"
                />
                <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
            </svg>
        </button>
    );
}
export function ListElement({ name }: { name: string }) {
    return (
        <li
            className="flex items-center md:after:content-[''] 
                after:bg-primary relative 
                after:bottom-0 hover:after:w-full
                after:transition-all after:w-0 after:duration-300
                md:after:h-1 after:left-1/2 after:-translate-x-1/2 after:absolute"
        >
            <a
                href=""
                className="h-full flex items-center m-auto"
            >
                {name}
            </a>
        </li>
    );
}
export default function NavBar() {
    const [state, setState] = useState(false);
    return (
        <nav className="relative">
            <div className="container flex flex-wrap items-center justify-between">
                <a href="">
                    <img
                        src="./images/logo.svg"
                        alt="logo"
                        className="self-stretch flex-shrink-0 select-none h-7"
                    />
                </a>
                <div className="md:hidden">
                    <HamburgerIcon onClick={() => setState(!state)} />
                </div>

                <ul
                    className={classNames(
                        "self-stretch z-10 absolute md:static w-5/6  md:w-fit  font-medium gap-2 gap-x-6",
                        "-translate-x-1/2 md:translate-x-0 left-1/2 top-[calc(100%+1.3rem)] bg-white-1 p-4 md:p-0 md:px-5 text-center flex justify-center flex-col items-stretch",
                        "md:flex-row",
                        {
                            "scale-0 opacity-0": !state,
                            "scale-1 opacity-100": state,
                        },
                        "transition duration-300 md:text-grey md:scale-100 md:opacity-100 items-stretch",
                        "gap-y-4"
                    )}
                >
                    <ListElement name="Home" />
                    <ListElement name="About" />
                    <ListElement name="Contact" />
                    <ListElement name="Blog" />
                    <ListElement name="Careers" />
                </ul>
                <div className="py-4 hidden md:block">
                    <CustomInput>Request Invite</CustomInput>
                </div>
            </div>
        </nav>
    );
}
