
import { useEffect, useState } from "react";
import Thumbnail from "./Thumbail";
import { useSearchParams } from "react-router-dom";

export default function Album({ className }) {

    const [photos, setPhotos] = useState([]);
    const [searchParam, setsearchParam] = useSearchParams();

    const apiCaller = async function () {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${searchParam.get("albumId")}`);
        let responseJson = await response.json();
        setPhotos(responseJson);
    }
    
    useEffect(() => { apiCaller(); }, []);

    return (
        <div className="album-container">
            {photos.map((photo) => <Thumbnail
                key={photo.id}
                thumbnailUrl={photo.thumbnailUrl}
                className="album-img"
                title={photo.title} 
                imgId={photo.id} />
            )}
        </div>
    );
}