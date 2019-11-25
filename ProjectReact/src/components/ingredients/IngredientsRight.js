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

function IngredientsRight() {
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
          黑黑皺皺的外殼第一眼看起來不怎麼討喜，但一咬下去外層酥脆充滿焦糖的香氣，內餡濕潤柔軟又帶點Q彈，還伴隨著迷人的酒香，這就是法式經典甜點-可麗露！<br/>
<br/>
食材：<br/>
A組<br/>
牛奶 400ml<br/>
香草精 1小匙<br/>
奶油 40克<br/>
B組<br/>
全蛋 2顆<br/>
蛋黃 1顆<br/>
C組<br/>
高筋麵粉 85克<br/>
糖粉 140克<br/>
鹽 1小撮<br/>
其他<br/>
蘭姆酒 60ml<br/>
奶油 少許(塗抹模具用) <br/>
<br/>
步驟：<br/>
1. <br/>
材料秤重分組備齊<br/>
2. <br/>
將A組材料倒入鍋中加熱攪拌至80度左右（鍋邊冒小泡泡就可以關火囉！）然後等待放涼一下<br/>
3. <br/>
將B組材料倒進攪拌盆中均勻攪散<br/>
4. <br/>
將A組材料倒進B組鋼盆中攪拌均勻<br/>
5. <br/>
將C組材料過篩，避免結塊<br/>
6. <br/>
把攪拌後的AB組分三次加入C組，用打蛋器均勻攪拌（要拌到沒有顆粒結塊喔！）<br/>
7. <br/>
加入蘭姆酒後攪拌均勻<br/>
8. <br/>
將混合後的麵糊過篩三次<br/>
9. <br/>
將完成的麵糊用保鮮膜包起來放到冰箱冷藏一晚<br/>
10. <br/>
隔天準備開始烘烤囉，先將烤箱預熱10分鐘 上下火皆設定230度<br/>
11. <br/>
將前一晚製作完成的麵糊拿出來，攪拌並再次過篩<br/>
12. <br/>
將可麗露模具內側刷上奶油<br/>
13. <br/>
將麵糊倒入模具，每個約70g（可用量杯會比較好倒喔！）<br/>
14. <br/>
放入烤箱，烤15分鐘讓可麗露的麵糊結皮定型<br/>
15. <br/>
將溫度降至210度烘烤50-60分鐘<br/>
16. <br/>
如果麵糊持續膨脹的話，要拿出來一個個敲一敲，敲回模具中（要記得帶手套喔！很燙）有持膨脹的話，記得每十分鐘重複此動作<br/>
17. <br/>
觀察可麗露的顏色，烤至深咖啡色就可以出爐囉！<br/>
18. <br/>
出爐後將不沾模直接倒扣在烘乾架上放涼即可<br/>
19. <br/>
放涼後建議冰至冷凍庫，等到要吃的時候再拿下來退冰10-15分鐘就可以吃囉！<br/>
<br/>
小撇步：<br/>
小秘訣Ⅰ：將混合過後的麵糊過篩能讓可麗露的口感更加細緻！<br/>
小秘訣Ⅱ：烘烤的過程中，需要將膨脹的可麗露拿出來敲一敲，把麵糊敲回去模具中！為的是讓烤出來的可麗露上色均勻，避免烤出白頭的可麗露喔！<br/>
小秘訣Ⅲ：可麗露放涼後趕快冰到冷凍庫，可以讓可麗露的外殼保持酥脆喔！

          </div>
          <div className="buttonRightRecipeRight">
            <ul className="buttonRightRecipeRightUl">
              <li className="buttonRightRecipeRightLi">
                <img className="ingredientsImage" src={`/image/ingredients/abstract01.jpg`} />
                <div className="ingredientsCardGroup">
                  <p className="ingredientsName">低筋麵粉</p>
                  <p className="ingredientsDetail">日本製粉鑽石日本製粉低筋麵粉鑽石。</p>
                  <div className="ingredientsDown">
                    <div className="ingredientsMain">
                      <p className="ingredientsPlace">產地：日本</p>
                      <p className="ingredientsSize">尺寸：50克</p>
                      <p className="ingredientsPrice">價格：500元</p>
                    </div>
                    <a className="ingredientsCartButton"><TiShoppingCart/> 放入購物車</a>
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
          <FaArrowLeft className="recipeRightArrow"/>
        </Button>
      <Drawer className="buttonRightIngredientsMain" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default IngredientsRight;