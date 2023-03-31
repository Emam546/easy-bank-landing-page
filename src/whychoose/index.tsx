function ItemElement({
    name,
    desc,
    img,
}: {
    name: string;
    desc: string;
    img: string;
}) {
    return (
        <div className="">
            <img
                src={img}
                alt=""
                className="m-auto md:m-0 mb-6"
            />
            <div>
                <h1 className="text-2xl py-2">{name}</h1>
                <p className="text-grey">{desc}</p>
            </div>
        </div>
    );
}
export default function WhyChoose() {
    return (
        <section className="whychoose bg-white-3 py-24 md:-mt-28">
            <div className="container text-center md:text-start">
                <div className="max-w-xl m-auto md:m-0">
                    <h1 className="text-3xl font-medium py-4">
                        Why choose Easybank?
                    </h1>
                    <p>
                        We leverage Open Banking to turn your bank account into
                        your financial hub. Control your finances like never
                        before.
                    </p>
                </div>
                <div className="grid gap-y-5 gap-x-7 pt-10 sm:grid-cols-2 md:grid-cols-4">
                    <ItemElement
                        name="Online Banking"
                        desc="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                        img="./images/icon-online.svg"
                    />
                    <ItemElement
                        name="Simple Budgeting"
                        desc="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
                        img="./images/icon-api.svg"
                    />
                    <ItemElement
                        name="Online Banking"
                        desc="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
                        img="./images/icon-budgeting.svg"
                    />
                    <ItemElement
                        name="Fast Onboarding"
                        desc="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                        img="./images/icon-onboarding.svg"
                    />
                </div>
            </div>
        </section>
    );
}
