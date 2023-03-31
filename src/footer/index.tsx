import CustomInput from "../components/customInput";

function Icon({ src }: { src: string }) {
    return (
        <a href="">
            <div className="aspect-square">
                <img
                    src={src}
                    className=""
                    alt=""
                />
            </div>
        </a>
    );
}
export default function Footer() {
    return (
        <footer className="footer py-10 bg-dark-Blue">
            <div className="container flex justify-between">
                <div className="flex gap-8">
                    <div className="flex justify-between flex-col pb-2">
                        <img
                            src="./images/logo.svg"
                            alt="logo"
                        />
                        <div className="flex gap-2 flex-wrap">
                            <Icon src={"./images/icon-facebook.svg"} />
                            <Icon src={"./images/icon-youtube.svg"} />
                            <Icon src={"./images/icon-twitter.svg"} />
                            <Icon src={"./images/icon-pinterest.svg"} />
                            <Icon src={"./images/icon-instagram.svg"} />
                        </div>
                    </div>

                    <ul className="grid grid-cols-2 text-grey gap-y-4 gap-x-14">
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Careers</a>
                        </li>
                        <li>
                            <a href="">Support</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="text-end flex flex-col justify-between items-end">
                    <CustomInput>Request Invite</CustomInput>
                    <p className="text-grey mt-4">
                        © Easybank. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
