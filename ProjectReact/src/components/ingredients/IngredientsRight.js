import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

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

function IngredientsRight({ ingredientData ,bakeName ,bakeDetail}) {
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

  console.log(bakeDetail);
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
            <p>{bakeDetail}</p>
          </div>
          <div className="buttonRightRecipeRight">
            <ul className="buttonRightRecipeRightUl">
              <li className="buttonRightRecipeRightLi">
                <img className="ingredientsImage" src={`/image/ingredients/ingredients_15.jpg`} />
                <div className="ingredientsCardGroup">
                  <p className="ingredientsName">低筋麵粉</p>
                  <p className="ingredientsDetail">日本製粉鑽石日本製粉低筋麵粉鑽石。</p>
                  <div className="ingredientsDown">
                    <div className="ingredientsMain">
                      <p className="ingredientsPlace">產地：日本</p>
                      <p className="ingredientsSize">尺寸：50克</p>
                      <p className="ingredientsPrice">價格：500元</p>
                    </div>
                    <a className="ingredientsCartButton"><TiShoppingCart /> 放入購物車</a>
                  </div>
                </div>
              </li>
              <li className="buttonRightRecipeRightLi">
                <img className="ingredientsImage" src={`/image/ingredients/ingredients_15.jpg`} />
                <div className="ingredientsCardGroup">
                  <p className="ingredientsName">低筋麵粉</p>
                  <p className="ingredientsDetail">日本製粉鑽石日本製粉低筋麵粉鑽石。</p>
                  <div className="ingredientsDown">
                    <div className="ingredientsMain">
                      <p className="ingredientsPlace">產地：日本</p>
                      <p className="ingredientsSize">尺寸：50克</p>
                      <p className="ingredientsPrice">價格：500元</p>
                    </div>
                    <a className="ingredientsCartButton"><TiShoppingCart /> 放入購物車</a>
                  </div>
                </div>
              </li>
              <li className="buttonRightRecipeRightLi">
                <img className="ingredientsImage" src={`/image/ingredients/ingredients_15.jpg`} />
                <div className="ingredientsCardGroup">
                  <p className="ingredientsName">低筋麵粉</p>
                  <p className="ingredientsDetail">日本製粉鑽石日本製粉低筋麵粉鑽石。</p>
                  <div className="ingredientsDown">
                    <div className="ingredientsMain">
                      <p className="ingredientsPlace">產地：日本</p>
                      <p className="ingredientsSize">尺寸：50克</p>
                      <p className="ingredientsPrice">價格：500元</p>
                    </div>
                    <a className="ingredientsCartButton"><TiShoppingCart /> 放入購物車</a>
                  </div>
                </div>
              </li>
              <li className="buttonRightRecipeRightLi">
                <img className="ingredientsImage" src={`/image/ingredients/ingredients_15.jpg`} />
                <div className="ingredientsCardGroup">
                  <p className="ingredientsName">低筋麵粉</p>
                  <p className="ingredientsDetail">日本製粉鑽石日本製粉低筋麵粉鑽石。</p>
                  <div className="ingredientsDown">
                    <div className="ingredientsMain">
                      <p className="ingredientsPlace">產地：日本</p>
                      <p className="ingredientsSize">尺寸：50克</p>
                      <p className="ingredientsPrice">價格：500元</p>
                    </div>
                    <a className="ingredientsCartButton"><TiShoppingCart /> 放入購物車</a>
                  </div>
                </div>
              </li>
              <li className="buttonRightRecipeRightLi">
                <img className="ingredientsImage" src={`/image/ingredients/ingredients_15.jpg`} />
                <div className="ingredientsCardGroup">
                  <p className="ingredientsName">低筋麵粉</p>
                  <p className="ingredientsDetail">日本製粉鑽石日本製粉低筋麵粉鑽石。</p>
                  <div className="ingredientsDown">
                    <div className="ingredientsMain">
                      <p className="ingredientsPlace">產地：日本</p>
                      <p className="ingredientsSize">尺寸：50克</p>
                      <p className="ingredientsPrice">價格：500元</p>
                    </div>
                    <a className="ingredientsCartButton"><TiShoppingCart /> 放入購物車</a>
                  </div>
                </div>
              </li>
              <li className="buttonRightRecipeRightLi">
                <img className="ingredientsImage" src={`/image/ingredients/ingredients_15.jpg`} />
                <div className="ingredientsCardGroup">
                  <p className="ingredientsName">低筋麵粉</p>
                  <p className="ingredientsDetail">日本製粉鑽石日本製粉低筋麵粉鑽石。</p>
                  <div className="ingredientsDown">
                    <div className="ingredientsMain">
                      <p className="ingredientsPlace">產地：日本</p>
                      <p className="ingredientsSize">尺寸：50克</p>
                      <p className="ingredientsPrice">價格：500元</p>
                    </div>
                    <a className="ingredientsCartButton"><TiShoppingCart /> 放入購物車</a>
                  </div>
                </div>
              </li>
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