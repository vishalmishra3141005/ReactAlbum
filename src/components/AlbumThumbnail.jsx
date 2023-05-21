

import { useState, useEffect } from "react";


export default function AlbumThumbnail({ title, thumbnailUrl, onClick, onDelete, albumId }) {

    const [thumbnail, setThumbnail] = useState('');


    const callerApi = async function() {
        let response = await fetch(thumbnailUrl);
        let responseJson = await response.json();
        setThumbnail(responseJson[0].thumbnailUrl);
    }

    const deleteHandler = function(e) {
        e.stopPropagation();
        onDelete(albumId);
    }

    useEffect(() => {
        callerApi();
    }, []);

    return (
        <div className="album-img" onClick={onClick}>
            <div className="img-label">{title}</div>
            <img className="img-style" src={thumbnail}></img>
            <button onClick={deleteHandler} className="delete-button">Delete</button>
        </div>
        
    );
}