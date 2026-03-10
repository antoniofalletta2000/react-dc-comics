import digitalComics from "/img/buy-comics-digital-comics.png"
import merchandise from "/img/buy-comics-merchandise.png"
import subscriptions from "/img/buy-comics-subscriptions.png"
import shop from "/img/buy-comics-shop-locator.png"
import powerVisa from "/img/buy-dc-power-visa.svg"
import jumbotron from "/img/jumbotron.jpg"
import AppCard from "./AppCard"


export default function Main({datiCards}) {
    
    return (
        <main className="mt-3">


            <div className="line_black bg-black">
                <img id="jumbo" src={jumbotron} alt="" />
                <div className="container">
                    <div>
                        <button id="btn" className="border border-0 bg-primary fw-bold text-white p-2">CURRENT SERIES</button>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 pt-5">
                        {datiCards.map(item=>(
                            <AppCard title={item.title} src={item.thumb} key={item.id}/>
                        ))}
                        
                    </div>
                </div>
                <div className="d-flex justify-content-center p-5">
                    <button className="border border-0 bg-primary fw-bold text-white px-5 py-1">LOAD MORE</button>
                </div>

            </div>




            <div id="line_blue" className="line_blue bg-primary">
                <div className="container py-5">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 d-flex  g-5">
                        <div className="col d-flex gap-2 align-items-center justify-content-center">
                            <img src={digitalComics} alt="" />
                            <a href="" className="text-white">DIGITAL COMICS</a>
                        </div>
                        <div className="col d-flex gap-2 align-items-center justify-content-center">
                            <img src={merchandise} alt="" />
                            <a href="" className="text-white">DC MERCHANDISE</a>
                        </div>
                        <div className="col d-flex gap-2 align-items-center justify-content-center">
                            <img src={subscriptions} alt="" />
                            <a href="" className="text-white">SUBSCRIPTION</a>
                        </div>
                        <div className="col d-flex gap-2 align-items-center justify-content-center">
                            <img src={shop} alt="" />
                            <a href className="text-white">COMIC SHOP LOCATOR</a>
                        </div>
                        <div className="col d-flex gap-2 align-items-center justify-content-center">
                            <img src={powerVisa} alt="" />
                            <a href="" className="text-white">DC&nbsp;POWER&nbsp;VISA</a>
                        </div>
                    </div>

                </div>


            </div>

        </main>
    )
}