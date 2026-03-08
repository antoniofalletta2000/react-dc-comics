import dcLogo from "/img/dc-logo.png"


export default function Header() {
    return (
        <header className=" container">
            <div className="row row-cols-1 d-flex justify-content-between align-items-center">
                <div className="col col-md-4">
                    <img className="m-3" src={dcLogo} alt="" />
                </div>
                <div className="col col-md-8">
                    <nav className="d-flex gap-2 align-items-center justify-content-center">
                        <a href="">CHARACTERS</a>
                        <a className="active border-bottom border-primary border-5" href="">COMICS</a>
                        <a href="">MOVIES</a>
                        <a href="">TV</a>
                        <a href="">GAMES</a>
                        <a href="">COLLECTIBLES</a>
                        <a href="">VIDEOS</a>
                        <a href="">FANS</a>
                        <a href="">NEWS</a>
                        <a href="">SHOP</a>
                    </nav>
                </div>

            </div>

        </header>
    )
}