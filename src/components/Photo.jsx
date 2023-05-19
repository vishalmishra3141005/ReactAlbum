
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Photo({ className }) {
    const [searchParam, setSearchParam] = useSearchParams();
    const [photo, setPhoto] = useState('');

    const apiCaller = async function() {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${searchParam.get("imgId")}`);
        let responseJson = await response.json();
        setPhoto(responseJson[0]);
    }

    useEffect(
        () => { apiCaller(); },
        [],
    );

    return (
        <div className="photo-container">
            <span>{photo.title}</span>
            <img className="photo-img" src={photo.url} alt="Photo" />
        </div>
    );
}