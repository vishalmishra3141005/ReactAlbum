
import { useEffect, useState } from "react";
import Thumbnail from "./Thumbail";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Album() {

    const [photos, setPhotos] = useState([]);
    const [searchParam, setsearchParam] = useSearchParams();
    
    const navigate = useNavigate();

    const apiCaller = async function () {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${searchParam.get("albumId")}`);
        let responseJson = await response.json();
        setPhotos(responseJson);
    }

    useEffect(() => { apiCaller(); }, []);

    const clickHandler = function() {
        navigate(-1);
    }

    return (

        <div className="gallery-container">
            <div className="button-container">
                <button onClick={clickHandler} className="buttom-style">Back</button>
                <button className="buttom-style">Add Photo</button>
            </div>
            <div className="album-container">
                {photos.map((photo) => <Thumbnail
                    key={photo.id}
                    thumbnailUrl={photo.thumbnailUrl}
                    title={photo.title}
                    imgId={photo.id}
                />
                )}
            </div>
        </div>
    );
}