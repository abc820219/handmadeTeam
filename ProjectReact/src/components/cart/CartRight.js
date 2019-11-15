import React,{ useContext } from "react";
import { MdCancel } from "react-icons/md";
import CartStore from "./CartStore";

const CartRight = () => {
  const { step } = useContext(CartStore);
  let invisible_button = {visibility: step? 'hidden':'visible'};
  return (
    <>
      <div className="col-8 p-0 checkRightBox">
        <div className="cartRightTitle d-flex align-items-center">
          <h1>shopping-Cart</h1>
        </div>
        <div className="cartRightSubTitle d-flex align-items-center">
          <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
          {step?'':'全選'}
          <h4>課程</h4>
        </div>
        <ul className="cartRightList">
          <li className="d-flex flex-sm-wrap">
            <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
            <div className="checkListBox">
              <h4>
                <span>Saturday</span>
                February 20th
              </h4>
              <h2>磐石</h2>
            </div>
            <div className="d-flex justify-content-center flex-column mr-3">
              <div className="d-flex align-items-center cartButtonAdd">
                <button style={invisible_button}>-</button>
                <span>1</span>
                <button style={invisible_button}>+</button>
              </div>
              <p className="cartListTotal">Total Count : $ 9500</p>
            </div>
            <figure>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="product pic"
              />
            </figure>
            <MdCancel className="cartOrderCancel" style={invisible_button}/>
          </li>
          <li className="d-flex flex-sm-wrap">
            <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
            <div className="checkListBox">
              <h4>
                <span>Saturday</span>
                February 20th
              </h4>
              <h2>磐石</h2>
            </div>
            <div className="d-flex justify-content-center flex-column mr-3">
              <div className="d-flex align-items-center cartButtonAdd">
                <button style={invisible_button}>-</button>
                <span>1</span>
                <button style={invisible_button}>+</button>
              </div>
              <p className="cartListTotal">Total Count : $ 9500</p>
            </div>
            <figure>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="product pic"
              />
            </figure>
            <MdCancel className="cartOrderCancel" style={invisible_button}/>
          </li>
          <li className="d-flex flex-sm-wrap">
            <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
            <div className="checkListBox">
              <h4>
                <span>Saturday</span>
                February 20th
              </h4>
              <h2>磐石</h2>
            </div>
            <div className="d-flex justify-content-center flex-column mr-3">
              <div className="d-flex align-items-center cartButtonAdd">
                <button style={invisible_button}>-</button>
                <span>1</span>
                <button style={invisible_button}>+</button>
              </div>
              <p className="cartListTotal">Total Count : $ 9500</p>
            </div>
            <figure>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="product pic"
              />
            </figure>
            <MdCancel className="cartOrderCancel" style={invisible_button}/>
          </li>
          <li className="d-flex flex-sm-wrap">
            <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
            <div className="checkListBox">
              <h4>
                <span>Saturday</span>
                February 20th
              </h4>
              <h2>磐石</h2>
            </div>
            <div className="d-flex justify-content-center flex-column mr-3">
              <div className="d-flex align-items-center cartButtonAdd">
                <button style={invisible_button}>-</button>
                <span>1</span>
                <button style={invisible_button}>+</button>
              </div>
              <p className="cartListTotal">Total Count : $ 9500</p>
            </div>
            <figure>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="product pic"
              />
            </figure>
            <MdCancel className="cartOrderCancel" style={invisible_button}/>
          </li>
        </ul>
        <div className="cartRightSubTitle d-flex align-items-center">
          <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
          {step?'':'全選'}
          <h4>食材</h4>
        </div>
        <ul className="cartRightList">
          <li className="d-flex flex-sm-wrap">
            <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
            <div className="checkListBox">
              <h4>
                <span>Banana</span>
                February 20th
              </h4>
              <h2>香蕉</h2>
            </div>
            <div className="d-flex justify-content-center flex-column mr-3">
              <div className="d-flex align-items-center cartButtonAdd">
                <button style={invisible_button}>-</button>
                <span>1</span>
                <button style={invisible_button}>+</button>
              </div>
              <p className="cartListTotal">Total Count : $ 9500</p>
            </div>
            <figure>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="product pic"
              />
            </figure>
            <MdCancel className="cartOrderCancel" style={invisible_button}/>
          </li>
          <li className="d-flex flex-sm-wrap">
            <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
            <div className="checkListBox">
              <h4>
                <span>Banana</span>
                February 20th
              </h4>
              <h2>香蕉</h2>
            </div>
            <div className="d-flex justify-content-center flex-column mr-3">
              <div className="d-flex align-items-center cartButtonAdd">
                <button style={invisible_button}>-</button>
                <span>1</span>
                <button style={invisible_button}>+</button>
              </div>
              <p className="cartListTotal">Total Count : $ 9500</p>
            </div>
            <figure>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="product pic"
              />
            </figure>
            <MdCancel className="cartOrderCancel" style={invisible_button}/>
          </li>
          <li className="d-flex flex-sm-wrap">
            <input type="checkbox" name="selectTotalCourse" style={invisible_button}/>
            <div className="checkListBox">
              <h4>
                <span>Banana</span>
                February 20th
              </h4>
              <h2>香蕉</h2>
            </div>
            <div className="d-flex justify-content-center flex-column mr-3">
              <div className="d-flex align-items-center cartButtonAdd">
                <button style={invisible_button}>-</button>
                <span>1</span>
                <button style={invisible_button}>+</button>
              </div>
              <p className="cartListTotal">Total Count : $ 9500</p>
            </div>
            <figure>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="product pic"
              />
            </figure>
            <MdCancel className="cartOrderCancel" style={invisible_button}/>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartRight;
