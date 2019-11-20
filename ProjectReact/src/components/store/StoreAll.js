import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import "../../common/scss/store/styleStore.scss"
import StoreList from "./StoreList"

class StoreAll extends Component {
    render() {
        return (
            <>
                <div className="storeAll">
                    <div className="storeChoose">
                        <div className="storeUp">
                            <p>STORE</p>
                        </div>
                        <div className="storeDown">
                            <p>STORE</p>
                            <div className="storeMap">
                                
                            </div>
                            <div className="storeButtonGroup">
                                <Grid item>
                                    <ButtonGroup
                                        variant="contained"
                                        color="secondary"
                                        size="large"
                                        aria-label="large contained secondary button group"
                                    >
                                        <Button>One</Button>
                                        <Button>Two</Button>
                                        <Button>Three</Button>
                                    </ButtonGroup>
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className="storeList">
                    </div>
                </div>
            </>
        );
    }
}

export default StoreAll;