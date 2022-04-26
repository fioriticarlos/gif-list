export default function Gif ({title, id, url}) {
    return (
        <div className="element">
            <h4 className="elementTitle">{title}</h4>
            <img className="elementImage" src={url} alt={title} />
            <small className="elementId">{id}</small>
        </div>
    )
}