
import { useEffect, useState } from "react";
import Thumbnail from "./Thumbail";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Album() {

    const [photos, setPhotos] = useState([]);
    const [searchParam, _setsearchParam] = useSearchParams();

    let imgId = 200;

    const navigate = useNavigate();
    const apiCaller = async function () {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${searchParam.get("albumId")}`);
        let responseJson = await response.json();
        setPhotos(responseJson);
    }

    useEffect(() => { apiCaller(); }, []);

    const clickHandler = function () {
        navigate(-1);
    }


    const deleteHandler = function (id) {
        const newPhotos = photos.filter((photo) => photo.id !== id);
        setPhotos(newPhotos);
    }


    const addPhotoHandler = function (e) {
        setPhotos([ {
            albumId: searchParam.get("albumId"), 
            id: imgId++,
            title: "New Photo",
            url: "https://random.imagecdn.app/500/150",
            thumbnailUrl: "https://random.imagecdn.app/500/150", 
        }, ...photos]);
    }

    return (
        <>
            <div className="gallery-container">
                
                <div className="button-container">
                    <button onClick={clickHandler} className="buttom-style">Back</button>
                    <input onChange={addPhotoHandler} multiple type="file" id="imgupload" style={{display: "none"}} />
                    <label htmlFor="imgupload">
                        <div className="buttom-style">Add Photo</div>
                    </label>
                </div>
                <div className="album-container">
                    {photos.map((photo) => <Thumbnail
                        key={photo.id}
                        thumbnailUrl={photo.thumbnailUrl}
                        title={photo.title}
                        imgId={photo.id}
                        onDelete={deleteHandler}
                    />
                    )}
                </div>
            </div>
        </>
    );
}