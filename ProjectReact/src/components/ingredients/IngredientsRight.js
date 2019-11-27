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

function IngredientsRight({ ingredientData, bakeName, bakeDetail }) {
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
            <p dangerouslySetInnerHTML={createMarkup()} />;
          </div>
          <div className="buttonRightRecipeRight">
            <ul className="buttonRightRecipeRightUl">
              {ingredientData.map((ingredient) => (
                <li className="buttonRightRecipeRightLi">
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
                      <a className="ingredientsCartButton"><TiShoppingCart /> 放入購物車</a>
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