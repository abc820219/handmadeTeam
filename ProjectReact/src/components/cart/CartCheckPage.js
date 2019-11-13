import React from "react";

const CartCheckPage = ({ nextStep ,step, prevStep ,check}) => {
  return (
    <>
      <div className="row">
        <div className="col-4 px-3 checkLeftBox">
          <div className="checkPageIconBox d-flex align-items-center justify-content-around">
            <div className='d-flex align-items-center' onClick={prevStep}>
              <div className="checkPageIcon cartStep">1</div>
              <h5 style={{ color: '#f78177', fontWeight: 'bold' }}>確認數量/金額</h5>
            </div>
            <hr style={step!==0?{background: '#f78177'}:{}}/>
            <div className='d-flex align-items-center'>
              <div className="checkPageIcon cartStep2" style={step!==0?{backgroundColor: '#f78177'}:{}}>2</div>
              <h5 style={step===0?{ color: '#fff' }:{color: '#f78177', fontWeight: 'bold'}}>選擇付款方式/結帳</h5>
            </div>
          </div>
          <div className='checkPageBox'>
            <h4>訂單摘要</h4>
            <div className='checkTotal d-flex align-items-baseline justify-content-between'>
              <p>商品總計</p>
              <h4>$ 1,855</h4>
            </div>
            <div className='d-flex flex-column'>
              <div className='checkOrderDeduct'>
                <ul className='mt-5 w-100'>
                  <li className=''>
                    <p>可用優惠卷</p>
                    <select name="" id="">
                      <option value="">145678</option>
                      <option value="">145777</option>
                    </select>
                  </li>
                  <li>
                    <p>可用紅利</p>
                    <h4>$ 55</h4>
                  </li>
                  <li className=''>
                    <p>使用紅利</p>
                    <input type="text" />
                  </li>
                  <li>
                    <p>其他折抵</p>
                    <h4>$ 70</h4>
                  </li>
                </ul>
              </div>
              <div>
                <div className='checkOrderTotal'>
                  <p>結帳總額</p>
                  <h4>$ 7855</h4>
                </div>
                {step===0?<button onClick={nextStep}>NEXT</button>:<button onClick={check}>CHECK</button>}
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 p-0 checkRightBox"></div>
      </div>
    </>
  );
};

export default CartCheckPage;
