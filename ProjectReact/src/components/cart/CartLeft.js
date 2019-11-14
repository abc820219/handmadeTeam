import React, { useContext } from 'react';
import CartStore from "./CartStore";
import {
    cartNext,
    cartPrev
} from "./CartAction";

const CartLeft = (props) => {
    console.log(props)
    const {
        step,
        cartPageDispatch
    } = useContext(CartStore);
    return (
        <>
            <div className="col-4 px-3 checkLeftBox">
                <div>
                    <div className="checkPageIconBox d-flex align-items-center justify-content-around">
                        <div className='d-flex align-items-center' onClick={() => cartPageDispatch(cartPrev())}>
                            <div className="checkPageIcon cartStep">1</div>
                            <h5 style={{ color: '#f78177', fontWeight: 'bold' }}>確認數量/金額</h5>
                        </div>
                        <hr style={step ? { background: '#f78177' } : {}} />
                        <div className='d-flex align-items-center' onClick={() => cartPageDispatch(cartNext())}>
                            <div className="checkPageIcon cartStep2" style={step !== 0 ? { backgroundColor: '#f78177' } : {}}>2</div>
                            <h5 style={step === 0 ? { color: '#fff' } : { color: '#f78177', fontWeight: 'bold' }}>選擇付款方式/結帳</h5>
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
                                <ul className='mt-4 w-100'>
                                    {
                                        !step ?
                                            <>
                                                <li>
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
                                            </> : ''}
                                    <li>
                                        <p>使用紅利</p>
                                        {
                                            step === 0 ?
                                                <input type="text" /> :
                                                <h4>$ 55</h4>
                                        }
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
                            </div>
                        </div>
                    </div>
                </div>
                {step ?
                    <>
                        <div className='creditCard'>
                            <div className='d-flex align-items-center'>
                                <input type="radio" name='pay'/>
                                <p>信用卡資料</p>
                            </div>
                            <div className="my-3">
                                <input type="text" placeholder='0000-0000-0000-0000' />
                            </div>
                            <div className='creditCardDetail d-flex justify-content-end'>
                                <div className='d-flex align-items-center mr-4'>
                                    <p className='px-3'>有效日期</p>
                                    <input type="text" />
                                </div>
                                <input type="text" placeholder='驗證碼' />
                            </div>
                            <ul>
                                <li>
                                    <input type="radio" name='pay' value='LINE Pay'/>
                                    <p>LINE Pay</p>    
                                </li>
                                <li>
                                    <input type="radio" name='pay' value='APPLE Pay'/>
                                    <p>APPLE Pay</p>
                                    
                                </li>
                                <li>
                                    <input type="radio" name='pay' value='GOOGLE Pay'/>
                                    <p>GOOGLE Pay</p>
                                    
                                </li>
                            </ul>
                        </div>
                    </> : ''
                }
                {!step ? <button onClick={() => cartPageDispatch(cartNext())}>NEXT</button> : <button>CHECK</button>}
            </div>
        </>
    )
}

export default CartLeft;