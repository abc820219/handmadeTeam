import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IngredientsRight from './IngredientsRight';

import "../../common/scss/ingredients/styleIngredients.scss"


class IngredientsAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <>
                <div className="ingredientsAll">
                    <div className="ingredientsLeft">
                        <div className="ingredientsLeftTop"></div>
                        <div className="recipeChoose">
                            <Slider
                                className="recipeChooseSlider"                                
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={7}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                vertical={true}
                                verticalSwiping={true}
                                dot={false}
                                arrows={false}
                            >
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract01.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract02.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract03.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract04.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract05.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract06.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract01.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract02.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract03.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract04.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract05.jpg`} />
                                </div>
                                <div className="recipeSliderLeft">
                                    <img src={`/image/ingredients/abstract06.jpg`} />
                                </div>
                            </Slider>
                        </div>
                        <div className="recipeNameLeft">
                            <p>PANCAKE</p>
                        </div>
                    </div>
                    <div className="ingredientsRight">
                        <div className="recipeRightDark"></div>
                        <div className="recipeNameRight">
                            <p>PANCAKE</p>
                        </div>
                        <div className="recipeBigImages">
                            <Slider
                                className="recipeBigImagesSlider"
                                dot={false}
                                arrows={false}
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                            >
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract01.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract02.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract03.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract04.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract05.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract06.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract01.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract02.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract03.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract04.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract05.jpg`} />
                                </div>
                                <div className="recipeSliderRight">
                                    <img src={`/image/ingredients/abstract06.jpg`} />
                                </div>
                            </Slider>
                        </div>
                        <div className="recipeRightButton">
                            <IngredientsRight />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default IngredientsAll;