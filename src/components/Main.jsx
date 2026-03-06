import digitalComics from "/img/buy-comics-digital-comics.png"
import merchandise from "/img/buy-comics-merchandise.png"
import subscriptions from "/img/buy-comics-subscriptions.png"
import shop from "/img/buy-comics-shop-locator.png"
import powerVisa from "/img/buy-dc-power-visa.svg"


export default function Main() {
    return (
        <main className="mt-3">
            <div className="line_black bg-black">
                <span></span>
            </div>
            <div className="line_blue bg-primary d-flex justify-content-center align-items-center gap-5">
                <div className="d-flex gap-2 align-items-center">
                    <img src={digitalComics} alt="" />
                    <span className="text-white">DIGITAL COMICS</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <img src={merchandise} alt="" />
                    <span className="text-white">DC MERCHANDISE</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <img src={subscriptions} alt="" />
                    <span className="text-white">SUBSCRIPTION</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <img src={shop} alt="" />
                    <span className="text-white">COMIC SHOP LOCATOR</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <img src={powerVisa} alt="" />
                    <span className="text-white">DC&nbsp;POWER&nbsp;VISA</span>
                </div>

            </div>

        </main>
    )
}