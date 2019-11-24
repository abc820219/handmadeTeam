import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  list: {
    width: 1450,
  },
  fullList: {
    width: 'auto',
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
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>
        9999999999999999999999999999999999999999999999999<br/>

      </List>
    </div>
  );
  return (
    <div>
      <Button className="recipeRightButtonShow" onClick={toggleDrawer('right', true)}>
        按這裡
        </Button>
      <Drawer className="buttonRightIngredientsMain" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default IngredientsRight;