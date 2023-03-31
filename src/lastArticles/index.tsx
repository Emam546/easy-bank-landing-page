import classNames from "classnames";

function ItemArticle({
    title,
    desc,
    minTitle,
    imgsrc,
}: {
    title: string;
    desc: string;
    minTitle: string;
    imgsrc: string;
}) {
    return (
        <div className="flex flex-col items-stretch text-start">
            <div
                className={classNames(
                    "aspect-[4/3] overflow-hidden",
                    `bg-cover bg-center`
                )}
                style={{ backgroundImage: `url('${imgsrc}')` }}
            ></div>
            <div className="bg-white-1 py-6 px-4 leading-4 flex-1">
                <h4 className="text-xs text-grey">{minTitle}</h4>
                <h1 className="my-3">{title}</h1>
                <p className="text-sm text-grey">{desc}</p>
            </div>
        </div>
    );
}
export default function LastArticle() {
    return (
        <section className="lastarticle bg-white-3  py-24">
            <div className="container text-center md:text-start">
                <h1 className="text-4xl">Last Articles</h1>
                <div className="grid gap-y-5 gap-x-7 pt-10 sm:grid-cols-2 md:grid-cols-4 items-stretch">
                    <ItemArticle
                        minTitle="By Claire Robinson"
                        title="Receive money in any currency with no fees"
                        desc="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
                        imgsrc="./images/image-currency.jpg"
                    />
                    <ItemArticle
                        minTitle="By Wilson Hutton"
                        title="Treat yourself without worrying about moneys"
                        desc="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
                        imgsrc="./images/image-restaurant.jpg"
                    />
                    <ItemArticle
                        minTitle="By Wilson Hutton"
                        title="Take your Easybank card wherever you go"
                        desc="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
                        imgsrc="./images/image-plane.jpg"
                    />
                    <ItemArticle
                        minTitle="By Claire Robinson"
                        title="Receive money in any currency with no fees"
                        desc="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
                        imgsrc="./images/image-confetti.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
