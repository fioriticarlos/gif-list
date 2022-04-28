export default function Gif ({title, id, url}) {
    return (
        <div className="gif">
            <h4 className="gifTitle">{title}</h4>
            <img loading="lazy" className="gifImage" src={url} alt={title} />
            <small className="gifId">{id}</small>
        </div>
    )
}