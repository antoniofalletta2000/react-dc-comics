export default function AppCard({src,title}) {
    
    return(
        <div className="col ">
        <div className="card bg-black">
            <img className="item" src={src} alt={title} />
        </div>
        <h3 className="item_title text-white">{title}</h3>
    </div>
    )
}