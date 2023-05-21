import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Photo({ className }) {
    const [searchParam, setSearchParam] = useSearchParams();
    const [photo, setPhoto] = useState("");

    const navigate = useNavigate();
    const apiCaller = async function () {
        let response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${searchParam.get("imgId")}`)
        let responseJson = await response.json();
        setPhoto(responseJson[0]);
    };

    const buttonHandler = function() {
        navigate(-1);
    }

    useEffect(() => {
        apiCaller();
    }, []);

    return (
        <div className="photo-container">
            <div className="button-container">
                <button onClick={(e) => buttonHandler()} className="buttom-style">Back</button>
            </div>
            <span style={{ marginTop: "35px" }}>{photo.title}</span>
            <img className="photo-img" src={photo.url} alt="Photo" />
        </div>
    );
}
