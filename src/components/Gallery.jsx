
import AlbumThumbnail from "./AlbumThumbnail"
import NavBar from "./NavBar";
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

    return (
        <>
            <div><button>Add Button</button></div>
            <div className="album-container">
                { albums.map((album) => <AlbumThumbnail 
                    onClick={(e) => clickHandler(album.id)}
                    key={album.id} 
                    thumbnailUrl={`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`} 
                    className="album-img" 
                    title={album.title} />
                )}
            </div>
        </>
    );
}