

export default function Thumbnail({ className , title, thumbnailUrl, onClick }) {


    return (
        <div className={className} onClick={onClick}>
            <div className="img-label">{title}</div>
            <img loading="lazy" className="img-style" src={thumbnailUrl}></img>
        </div>
        
    );
}