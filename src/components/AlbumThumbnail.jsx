

import { useState, useEffect } from "react";


export default function Thumbnail({ className , title, thumbnailUrl, onClick }) {

    const [thumbnail, setThumbnail] = useState('');


    const callerApi = async function() {
        let response = await fetch(thumbnailUrl);
        let responseJson = await response.json();
        setThumbnail(responseJson[0].thumbnailUrl);
    }

    useEffect(() => {
        callerApi();
    }, []);

    return (
        <div className={className} onClick={onClick}>
            <div className="img-label">{title}</div>
            <img className="img-style" src={thumbnail}></img>
        </div>
        
    );
}