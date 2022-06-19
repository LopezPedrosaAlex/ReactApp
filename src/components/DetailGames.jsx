import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailGame } from "./Api";
import "../styles/DetailGames.css"

const DetailGames = () => {
    const params = useParams();
    const [detailGame, setDetailGame] = useState(null);

    useEffect(() => {
        getDetailGame(params.Id, setDetailGame);
    }, []);

    console.log(detailGame);
    return (
        <>
            {detailGame !== null ?

                <div>
                    <h1 className="DetailTitle">{detailGame.name}</h1>
                    <p className="DetailText">{detailGame.description_raw}</p>
                    <img className="DetailImage" src={detailGame.background_image_additional}></img>
                </div>

                : ""}
        </>
    );
};

export default DetailGames;
