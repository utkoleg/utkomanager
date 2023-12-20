import React from "react";
import Image from ".//3.jpg"
export const Contact = () => {
    return (
        <div>
            <h1 className="text-center pt-3" style={{fontSize:"30px"}}>Our investors</h1>
        <div className="flex justify-between m-4">
        <div className="card col-3">
            <img src={Image} className="card-img-top" style={{height:"350px"}}/>

                <div className="card-body">
                    <h5 className="card-title">Dima Dimin</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <button
                        className="btn btn-md text-white"
                        style={{background: "#0d1137", border: "0"}}
                        onClick={() => {
                            window.confirm(
                                `"НОМЕР ТЕЛЕФОНА"`
                            );
                        }}
                    >CALL</button>
                </div>
        </div>

        <div className="card col-3">
            <img src={Image} className="card-img-top" alt="..." style={{height:"350px"}}/>

            <div className="card-body">
                <h5 className="card-title">Erik Erikov</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <button
                    className="btn btn-md text-white"
                    style={{background: "#0d1137", border: "0"}}
                    onClick={() => {
                        window.confirm(
                            `"НОМЕР ТЕЛЕФОНА"`
                        );
                    }}
                >CALL</button>
            </div>
        </div>

        <div className="card col-3">
            <img src={Image} className="card-img-top" alt="..." style={{height:"350px"}}/>

            <div className="card-body">
                <h5 className="card-title">Borat Vampir</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <button
                    className="btn btn-md text-white"
                    style={{background: "#0d1137", border: "0"}}
                    onClick={() => {
                        window.confirm(
                            `"НОМЕР ТЕЛЕФОНА"`
                        );
                    }}
                >CALL</button>
            </div>
        </div>


    </div>
        </div>)
};