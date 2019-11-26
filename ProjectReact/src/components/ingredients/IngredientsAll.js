import React, { Component, useState, useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IngredientsRight from './IngredientsRight';

import "../../common/scss/ingredients/styleIngredients.scss"


const IngredientsAll = (props) => {
    let slider1 = props.slider1;
    let slider2 = props.slider2;
    let slider3 = props.slider3;
    let slider4 = props.slider4;

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [nav3, setNav3] = useState(null);
    const [nav4, setNav4] = useState(null);
    const [bakeAllDataShow, setBakeAllDataShow] = useState([]);
    const [bakeEngName, setBakeEngName] = useState('');

    const backAllData = async() => {
        const backAllDataLoad = await fetch("http://localhost:5000/handmade/ingredients");
        const backAllDataJson = await backAllDataLoad.json();
        console.log(backAllDataJson);
        setBakeAllDataShow(backAllDataJson);
        
    }

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
        setNav3(slider3);
        setNav4(slider4);
        backAllData();
    }, [])

    const selectBakeName = (bakeSid,bakeAllDataShow) => {
        let chosenBake = bakeAllDataShow.filter(bakeAll => {
            return bakeAll.bake_sid === bakeSid;
        });

        setBakeEngName(chosenBake[0].bake_engName);
    }


    return (
        <>
            <div className="ingredientsAll">
                <div className="ingredientsLeft">
                    <div className="ingredientsLeftTop"></div>
                    <div className="recipeChoose">
                        <Slider
                            className="recipeChooseSlider"
                            asNavFor={nav1}
                            ref={slider => (slider2 = slider)}
                            slidesToShow={5}
                            centerMode={true}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            vertical={true}
                            verticalSwiping={true}
                            dot={false}
                            arrows={false}
                        >
                        {bakeAllDataShow.map((bakeAll)=>(
                            <div className="recipeSliderLeft">
                                <img src={`/image/ingredientsMin/${bakeAll.bake_image}`} onClick={()=>{selectBakeName(bakeAll.bake_sid,bakeAllDataShow)}}/>
                            </div>
                        ))}
                        </Slider>
                    </div>
                    <div className="recipeNameLeft">
                        <p>{bakeEngName}</p>
                    </div>
                </div>
                <div className="ingredientsRight">
                    <div className="recipeRightDark"></div>
                    <div className="recipeNameRight">
                        <p>{bakeEngName}</p>
                    </div>
                    <div className="recipeBigImages">
                        <Slider
                            className="recipeBigImagesSlider"
                            dot={false}
                            arrows={false}
                            asNavFor={nav2}
                            ref={slider => (slider1 = slider)}
                        >
                        {bakeAllDataShow.map((bakeAll)=>(
                            <div className="recipeSliderRight">
                                <img src={`/image/ingredients/${bakeAll.bake_image}`}/>
                            </div>
                        ))}
                        </Slider>
                    </div>
                    <div className="recipeRightButton">
                        <IngredientsRight />
                    </div>
                </div>
            </div>
            <div className="ingredientsAllMin">
                <div className="ingredientsTop">
                    <div className="ingredientsTopTop"></div>
                    <div className="recipeBigImages">
                        <Slider
                            className="recipeBigImagesSlider"
                            dot={false}
                            arrows={false}
                            asNavFor={nav4}
                            ref={slider => (slider3 = slider)}
                        >
                            {bakeAllDataShow.map((bakeAll)=>(
                            <div className="recipeSliderRight">
                                <img src={`/image/ingredients/${bakeAll.bake_image}`}/>
                            </div>
                        ))}
                        </Slider>
                    </div>
                    <div className="recipeRightDark"></div>
                    <div className="recipeNameTop">
                        <p>{bakeEngName}</p>
                    </div>
                    <div className="recipeRightButton">
                        <IngredientsRight />
                    </div>
                </div>
                <div className="ingredientsLeft">
                    <div className="recipeNameLeft">
                        <p>{bakeEngName}</p>
                    </div>
                    <div className="recipeChoose">
                        <Slider
                            className="recipeChooseSlider"
                            asNavFor={nav3}
                            ref={slider => (slider4 = slider)}
                            slidesToShow={3}
                            centerMode={true}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            dot={false}
                            arrows={false}
                        >
                            {bakeAllDataShow.map((bakeAll)=>(
                            <div className="recipeSliderLeft">
                                <img src={`/image/ingredients/${bakeAll.bake_image}`} onClick={()=>{selectBakeName(bakeAll.bake_sid,bakeAllDataShow)}}/>
                            </div>
                        ))}
                        </Slider>
                    </div>

                </div>

            </div>
        </>
    );
}

export default IngredientsAll;