import React, { Component, useState, useEffect ,useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IngredientsRight from './IngredientsRight';

// ICON import

import { TiShoppingCart } from 'react-icons/ti';

import $ from 'jquery';

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
    const [bakebool, setBakebool] = useState(false);
    const [ingredientData, setIngredientData] = useState([]);
    const [bakeName, setBakeName] = useState();
    const [bakeDetail, setBakeDetail] = useState();

    const backAllData = async () => {
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
        setBakebool(true);

        window.setTimeout(function () {
            $("#root").find("#recipeSliderLoadClick").click();
        }, 350);
    }, [])

    // const selectBakeName = (bakeSid, bakeAllDataShow) => {
    //     console.log(bakeAllDataShow);
    //     console.log(bakeSid);
    //     let chosenBake = bakeAllDataShow.filter(bakeAll => {
    //         return bakeAll.bake_sid === bakeSid;
    //     });
    //     console.log(chosenBake);
    //     setBakeEngName(chosenBake[0].bake_engName);
    //     setBakebool(false);
    // }

    const selectBakeItem = async (bakeSid) => {
        bakeSid = JSON.stringify({ bakeSid: bakeSid });
        try {
            const url = 'http://localhost:5000/handmade/ingredients';
            const bakeSelect = await fetch(url, {
                method: "POST",
                body: bakeSid,
                headers: { "Content-Type": "application/json" }
            });
            const bake_Data = await bakeSelect.json();
            console.log(bake_Data);
            setBakeEngName(bake_Data[0].bake_engName);
            setIngredientData(bake_Data[1]);
            setBakeName(bake_Data[0].bake_name);
            setBakeDetail(bake_Data[0].bake_detial);
        } catch (e) {
            console.log(e);
        }
    }

    if (bakeAllDataShow.length > 0) {
        if (bakebool) {
            setBakeEngName("CREPE CAKE");
            setBakebool(false);
        }
    }

    function createMarkup() {
        return { __html: bakeDetail };
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
                            {bakeAllDataShow.map((bakeAll) => (
                                <div className="recipeSliderLeft" id="recipeSliderLoadClick">
                                    <div className="recipeSliderLeftBakeName" onClick={() => { selectBakeItem(bakeAll.bake_sid) }}>
                                        <p className="recipeSliderLeftBakeNameText" >{bakeAll.bake_name}</p>
                                    </div>
                                    <img src={`/image/ingredientsMin/${bakeAll.bake_image}`} />
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
                            {bakeAllDataShow.map((bakeAll) => (
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/${bakeAll.bake_image}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="recipeRightButton">
                        <IngredientsRight ingredientData={ingredientData} bakeName={bakeName} bakeDetail={bakeDetail} />
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
                            swipe={false}
                            arrows={false}
                            asNavFor={nav4}
                            ref={slider => (slider3 = slider)}
                        >
                            {bakeAllDataShow.map((bakeAll) => (
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredientsRWD/${bakeAll.bake_image}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="recipeNameTop">
                        <p>{bakeEngName}</p>
                    </div>
                </div>
                <div className="ingredientsDown">
                    <div className="recipeNameDown">
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
                            {bakeAllDataShow.map((bakeAll) => (
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredientsMin/${bakeAll.bake_image}`} onClick={() => { selectBakeItem(bakeAll.bake_sid) }} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="recipeChooseMain">
                        <div className="buttonRightRecipeLeft">
                            <div>
                                <p className="recipeTitle">{bakeName}</p>
                                <a className="clickToIngredientsBuyCard" href="#clickToIngredientsBuyCard">
                                    <p>選購食材</p>
                                </a>
                            </div>
                            <p className="recipeMain" dangerouslySetInnerHTML={createMarkup()} />
                            <div className="ingredientsBuyCardGroup" id="clickToIngredientsBuyCard">
                                <ul className="ingredientsBuyCardUl">
                                    {ingredientData.map((ingredient) => (
                                        <li className="ingredientsBuyCardLi">
                                            <img className="ingredientsImage" src={`/image/ingredients/${ingredient.ingredients_image}`} />
                                            <div className="ingredientsCardGroup">
                                                <p className="ingredientsName">{ingredient.ingredients_name}</p>
                                                <p className="ingredientsDetail">{ingredient.ingredients_detial}</p>
                                                <div className="ingredientsDown">
                                                    <div className="ingredientsMain">
                                                        <p className="ingredientsPlace">產地：{ingredient.ingredients_place}</p>
                                                        <p className="ingredientsSize">尺寸：{ingredient.ingredients_size}</p>
                                                        <p className="ingredientsPrice">價格：{ingredient.ingredients_price}元</p>
                                                    </div>
                                                </div>
                                                <a className="ingredientsCartButton">
                                                    <TiShoppingCart className="cartReactIcon" />
                                                    <p>放入購物車</p>
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IngredientsAll;