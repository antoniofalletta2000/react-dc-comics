import dcLogoBg from "/img/dc-logo-bg.png"
import facebookLogo from "/img/footer-facebook.png"
import twitterLogo from "/img/footer-twitter.png"
import youtubeLogo from "/img/footer-youtube.png"
import pinterestLogo from "/img/footer-pinterest.png"
import periscopeLogo from "/img/footer-periscope.png"

export default function Footer() {
    return (
        <>
            <div id="bgimg" className="bgimg">
                <div className="container text-white d-flex justify-content-start">
                    <div className="pt-5 d-flex justify-content-center gap-5">


                        <ul>
                            <li>
                                <h3>DC COMICS</h3>
                            </li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                            <li className="pt-4">
                                <h3>SHOP</h3>
                            </li>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>



                        <ul>
                            <li>
                                <h3>DC</h3>
                            </li>
                            <li>Terms Of Use</li>
                            <li>Privacy policy (New) </li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshop</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>


                        <ul>
                            <li>
                                <h3>SITES</h3>
                            </li>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>


                    </div>
                    <img id="dcbg" src={dcLogoBg} alt="" />
                </div>
            </div>




            <div id="line_grey" className="line_grey d-flex justify-content-around align-items-center">
                <div>
                    <button className="border border-info border-3 bg-transparent p-3 text-white fw-bold">
                        SIGN-UP NOW!
                    </button>
                </div>

                <div className="social_icons d-flex gap-3 align-items-center">
                    <span className="text-info fw-bold">FOLLOW US</span>
                    <a href="">
                        <img src={facebookLogo} alt="" />
                    </a>
                    <a href="">
                        <img src={twitterLogo} alt="" />
                    </a>
                    <a href="">
                        <img src={youtubeLogo} alt="" />
                    </a>
                    <a href="">
                        <img src={pinterestLogo} alt="" />
                    </a>
                    <a href="">
                        <img src={periscopeLogo} alt="" />
                    </a>

                </div>
            </div>
        </>


    )
}