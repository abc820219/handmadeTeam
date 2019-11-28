import React ,{useContext}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import CartStore from "../cart/CartStore";
import {
  addIngre,
  cancelIngre
} from "../../components/cart/CartAction";
// ICON import

import { FaArrowLeft } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';

const useStyles = makeStyles({
  list: {
    width: "100%",
  },
  fullList: {
    width: '100',
  },
});

function IngredientsRight({ ingredientData, bakeName, bakeDetail }) {
  const {ingreCart,id, cartIngreDispatch} = useContext(CartStore);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  function createMarkup() {
    return { __html: bakeDetail };
  }


  const ingreSelectLoop = (v,ingreCart) => {
    return ingreCart.some(ingre=>ingre.ingredients_sid === v.ingredients_sid)
  }
  const putInCart = (id,ingredient) => {
    const {ingredients_sid , ingredients_name, ingredients_en_name, ingredients_image, ingredients_price} = ingredient;
    const newIngre = {
      ingredients_sid: ingredients_sid,
      ingredients_name: ingredients_name,
      ingredients_en_name : ingredients_en_name,
      ingredients_pic: ingredients_image,
      ingredients_price: ingredients_price,
      ingredients_order_quantity: 1
    }
    cartIngreDispatch(addIngre(newIngre,id))
  }

  console.log(ingreCart);
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List className="buttonRightList">
        <div className="buttonRightRecipe">
          <div className="buttonRightRecipeLeft">
            <p>{bakeName}</p>
            <p dangerouslySetInnerHTML={createMarkup()} />
          </div>
          <div className="buttonRightRecipeRight">
            <ul className="buttonRightRecipeRightUl">
              {ingredientData.map((ingredient) =>(
    
                <li className="buttonRightRecipeRightLi">
                  <img className="ingredientsImage" src={`/image/ingredients/${ingredient.ingredients_image}`} alt='no_img'/>
                  <div className="ingredientsCardGroup">
                    <p className="ingredientsName">{ingredient.ingredients_name}</p>
                    <p className="ingredientsDetail">{ingredient.ingredients_detial}</p>
                    <div className="ingredientsDown">
                      <div className="ingredientsMain">
                        <p className="ingredientsPlace">產地：{ingredient.ingredients_place}</p>
                        <p className="ingredientsSize">尺寸：{ingredient.ingredients_size}</p>
                        <p className="ingredientsPrice">價格：{ingredient.ingredients_price}元</p>
                      </div>
                      <a className="ingredientsCartButton"
                      style={ingreCart.length!==0 && ingreSelectLoop(ingredient,ingreCart)?{backgroundColor: 'grey',pointerEvents:'none'}:{}}
                      onClick={()=>{putInCart(id,ingredient)}}
                      href
                      ><TiShoppingCart /> 放入購物車</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </List>
    </div>
  );
  return (
    <div>
      <Button className="recipeRightButtonShow" onClick={toggleDrawer('right', true)}>
        <FaArrowLeft className="recipeRightArrow" />
      </Button>
      <Drawer className="buttonRightIngredientsMain" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default IngredientsRight;