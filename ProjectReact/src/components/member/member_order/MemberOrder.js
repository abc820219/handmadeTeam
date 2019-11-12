import React, { useState , useReducer} from "react";
// import store from '../../store'
import MemberOrderList from "./MemberOrderList";
import MemberOrderDetail from "./MemberOrderDetail";
import Store,{OrderStore} from "./OrderStore";
import { courseListReducer, ingreListReducer } from "./OrderReducers";
export const courseInitState = { courseLists: [] };
export const ingreInitState = { ingreLists: [] };

const MemberOrder = () => {
  const [clState, clDispatch] = useReducer(
    courseListReducer,
    courseInitState
  );
  const [ilState, ilDispatch] = useReducer(
    ingreListReducer,
    ingreInitState
  );
  const [orderType, setOrderType] = useState(1);
  const changeOrderType = a => {
    setOrderType(a);
  };
  return (
    <Store.Provider value={{
        courseLists: clState.courseLists,
        ingreLists: ilState.ingreLists,
        courseIsFetch: Store.courseIsFetch,
        ingreIsFetch: Store.ingreIsFetch,
        clDispatch,
        ilDispatch
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 p-0">
            <MemberOrderList
              changeOrderType={changeOrderType}
              style={{ paddingTop: "60px" }}
            />
          </div>
          <div className="col-8 p-0">
            <MemberOrderDetail
              orderType={orderType}
              style={{ paddingTop: "60px" }}
            />
          </div>
        </div>
      </div>
    </Store.Provider>
  );
};

export default MemberOrder;
