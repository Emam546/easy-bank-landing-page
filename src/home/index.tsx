import CustomInput from "../components/customInput";

export default function Home() {
    return (
        <section className="home bg-white-3">
            <div className="container px-0 relative md:flex flex-col md:flex-row-reverse items-center">
                <div
                    className="overflow-hidden 
                    relative aspect-square shrink-0 grow
                    bg-[url('./images/bg-intro-mobile.svg')] md:bg-[url('./images/bg-intro-desktop.svg')] 
                    bg-cover md:bg-contain bg-no-repeat md:bg-left-top
                "
                >
                    <img
                        src="./images/image-mockups.png"
                        className="absolute bottom-0"
                        alt=""
                    />
                </div>
                <div className="px-4 text-center md:text-start break-words md:max-w-2xl flex-1">
                    <h1 className="text-5xl font-medium">
                        Next generation digital banking
                    </h1>
                    <p className="text-grey py-5">
                        Take your financial life online. Your Easybank account
                        will be a one-stop-shop for spending, saving, budgeting,
                        investing, and much more.
                    </p>
                    <div className="pb-5">
                        <CustomInput>Request Invite</CustomInput>
                    </div>
                </div>
            </div>
        </section>
    );
}
