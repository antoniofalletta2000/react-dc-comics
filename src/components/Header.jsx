import dcLogo from "/img/dc-logo.png"


export default function Header() {
  const links=[
        {
            id:1,
            text:"CHARACTERS",
            url:"#",
            current:false
        },
        {
            id:2,
            text:"COMICS",
            url:"#",
            current:true
        },
        {
            id:3,
            text:"MOVIES",
            url:"#",
            current:false
        },
        {
            id:4,
            text:"TV",
            url:"#",
            current:false
        },
        {
            id:5,
            text:"GAMES",
            url:"#",
            current:false
        },
        {
            id:6,
            text:"COLLECTIBLES",
            url:"#",
            current:false
        },
        {
            id:7,
            text:"VIDEOS",
            url:"#",
            current:false
        },
        {
            id:8,
            text:"FANS",
            url:"#",
            current:false
        },
        {
            id:9,
            text:"NEWS",
            url:"#",
            current:false
        },
        {
            id:10,
            text:"SHOP",
            url:"#",
            current:false
        }
    ];
    return (
        <header className=" container">
            <div className="row row-cols-1 d-flex justify-content-between align-items-center">
                <div className="col col-md-4">
                    <a href="">
                        <img className="m-3" src={dcLogo} alt="" />
                    </a>
                </div>
                <div className="col col-md-8">
                    <nav className="d-flex gap-2 align-items-center justify-content-center">
                        {links.map(link=>(
                            <a href={link.url} className={link.current===true ? "active" : " "} key={link.id}>
                                {link.text}
                            </a>
                        ))}
                    </nav>
                </div>

            </div>

        </header>
    )
}