import dcLogo from "/img/dc-logo.png"


export default function Header(){
    return(
        <header className="d-flex justify-content-around">
            <img className="mt-3" src={dcLogo} alt="" />
            <nav className="d-flex gap-3 align-items-center ">
                <a href="">CHARACTERS</a>
                <a className="active" href="">COMICS</a>
                <a href="">MOVIES</a>
                <a href="">TV</a>
                <a href="">GAMES</a>
                <a href="">COLLECTIBLES</a>
                <a href="">VIDEOS</a>
                <a href="">FANS</a>
                <a href="">NEWS</a>
                <a href="">SHOP</a>
            </nav>
        </header>
    )
}