import { useNavigate } from "react-router-dom";


export default function Thumbnail({ title, imgId, thumbnailUrl, onDelete }) {

    const navigate = useNavigate();

    const clickHandler = function() {
        navigate(`/photo?imgId=${imgId}`);
    }

    const deleteHandler = function(e) {
        e.stopPropagation();
        onDelete(imgId);
    }

    return (
        <div className="album-img" onClick={clickHandler}>
            <div className="img-label">{title}</div>
            <img loading="lazy" className="img-style" src={thumbnailUrl} />
            <button onClick={deleteHandler} className="delete-button">Delete</button>
        </div>
        
    );
}