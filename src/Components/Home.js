import React from "react";
import Group from "./Group.png";
import  Twitter61  from "./twitter-6 1.svg";

<link rel="stylesheet" href="style.css" />

export const Home = () => {
    return (
        <div className="home">
            <div className="div-2">
                <div className="text-wrapper">Anisha Musti</div>
                <div className="overlap">
                    <div className="overlap-2">
                        <div className="text-wrapper-2">Hello, I’m</div>
                        <div className="text-wrapper-3">Anisha Musti</div>
                        <img className="DSC" alt="Dsc" src="DSC_4098 1.png" />
                        <div className="group-2">
                            <div className="rectangle-2" />
                            <div className="rectangle-3" />
                            <div className="rectangle-4" />
                            <div className="rectangle-5" />
                            <div className="rectangle-6" />
                        </div>
                        <div className="group-3">
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-2">
                                    <div className="rectangle-7" />
                                    <div className="rectangle-8" />
                                </div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-group-2">
                                    <div className="rectangle-7" />
                                    <div className="rectangle-8" />
                                </div>
                            </div>
                            <div className="div-wrapper">
                                <div className="overlap-group-2">
                                    <div className="rectangle-7" />
                                    <div className="rectangle-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="p">CS + Business at UNC-Chapel Hill.</p>
                    <Group className="group-5" property1="default" text="Contact" />
                </div>
                <div className="group-4">
                    <div className="text-wrapper-4">Home</div>
                    <div className="text-wrapper-5">Contact</div>
                </div>
                <Twitter61 className="twitter" />
                <div className="overlap-3">
                    <div className="element-little-slide" />
                    <p className="i-m-anisha-a">
                        I’m Anisha, a freshman at UNC-Chapel Hill from Scarsdale, NY. I’ve compiled a few likes and dislikes to get
                        to know me!
                        <br />
                        <br />
                        Likes:
                        <br />
                        Shopping &amp; clothes
                        <br />
                        Mediterranean food (CAVA 🤤)
                        <br />
                        Field Hockey &amp; Soccer
                        <br />
                        Bodies of water
                        <br />
                        Travel
                        <br />
                        <br />
                        Dislikes:
                        <br />
                        Cockroaches (flying)
                        <br />
                        Raw tomatoes
                        <br />
                        Mornings
                    </p>
                    <div className="text-wrapper-6">about.</div>
                </div>
            </div>
        </div>
    );
};
