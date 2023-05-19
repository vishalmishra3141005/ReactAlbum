import { useNavigate } from "react-router-dom";


export default function Thumbnail({ className , title, imgId, thumbnailUrl }) {

    const navigate = useNavigate();

    const clickHandler = function() {
        navigate(`/photo?imgId=${imgId}`);
    }

    return (
        <div className={className} onClick={clickHandler}>
            <div className="img-label">{title}</div>
            <img loading="lazy" className="img-style" src={thumbnailUrl}></img>
        </div>
        
    );
}