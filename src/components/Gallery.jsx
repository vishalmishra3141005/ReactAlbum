
import AlbumThumbnail from "./AlbumThumbnail"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
    
    const [albums, setAlbums] = useState([]);
    const navigate = useNavigate();

    const clickHandler = function(albumId) {
        navigate(`/album?albumId=${albumId}`);
    }

    let userId = 200;

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

    const addAlbumHandler = function(e) {
        setAlbums([ {
            userId: userId++, 
            id: userId,
            title: "New Photo",
            url: "https://random.imagecdn.app/500/150",
            thumbnailUrl: "https://random.imagecdn.app/500/150", 
        }, ...albums]);
    }

    return (
        <>
            <div className="gallery-container">
                <div className="button-container">
                    <input onChange={addAlbumHandler} multiple type="file" id="imgupload" style={{display: "none"}} />
                    <label htmlFor="imgupload">
                        <div className="buttom-style">Add Album</div>
                    </label>
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