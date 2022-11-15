


export default function Card({ openSpot, location, coverImg, stats, title, price }) {
    let badgeText;
    if (openSpot === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }



    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={coverImg} alt="cardImage" className="card--image" />
            <div className="card--stats">
                <img src={"/images/star.png"} alt="star" className="card--star" />
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card--title"> {title}</p>
            <p className="card--price"><span className="bold">From ${price} </span>/ person</p>

        </div>
    )
}