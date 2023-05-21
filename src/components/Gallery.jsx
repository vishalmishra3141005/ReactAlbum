
import AlbumThumbnail from "./AlbumThumbnail"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
    
    const [albums, setAlbums] = useState([]);
    const navigate = useNavigate();

    const clickHandler = function(albumId) {
        navigate(`/album?albumId=${albumId}`);
    }

    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/albums")
                .then((response) => response.json().then(json => setAlbums(json)))
                .catch(setAlbums([]));
        }, []
    );


    const deleteHandler = function(albumId) {
        const newAlbum = albums.filter((album) => album.id !== albumId);
        setAlbums(newAlbum);
    }


    return (
        <>
            <div className="gallery-container">
                <div className="button-container">
                    <button className="buttom-style">Add Album</button>
                </div>
                <div className="album-container">
                    { albums.map((album) => <AlbumThumbnail 
                        onClick={(e) => clickHandler(album.id)}
                        key={album.id} 
                        thumbnailUrl={`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`} 
                        title={album.title} 
                        onDelete={deleteHandler} 
                        albumId={album.id} />
                    )}
                </div>
            </div>
        </>
    );
}