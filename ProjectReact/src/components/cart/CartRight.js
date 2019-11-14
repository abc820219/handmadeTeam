import React from 'react';
import { MdCancel } from 'react-icons/md';

const CartRight = () => {
    return (
        <>
            <div className="col-8 p-0 checkRightBox">
                <div className='cartRightTitle d-flex align-items-center'>
                    <h1>shopping-Cart</h1>
                </div>
                <div className='cartRightSubTitle d-flex align-items-center'>
                    <input type="checkbox" name='selectTotalCourse' />全選
                    <h4>課程</h4>
                </div>
                <ul className='cartRightList'>
                    <li className='d-flex flex-sm-wrap'>
                        <input type="checkbox" name='selectTotalCourse' />
                        <div className="checkListBox">
                            <h4>
                                <span>Saturday</span>
                                February 20th
                                </h4>
                            <h2>磐石</h2>
                        </div>
                        <div className='d-flex justify-content-center flex-column mr-3'>
                            <div className='d-flex align-items-center cartButtonAdd'>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <p className='cartListTotal'>Total Count : $ 9500</p>
                        </div>
                        <figure>
                            <img src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600" alt="product pic" />
                        </figure>
                        <MdCancel style={{ marginRight: '-600px', flexShrink: '0', fontSize: '30px' }} />
                    </li>
                    <li>
                        <input type="checkbox" name='selectTotalCourse' />
                    </li>
                    <li>
                        <input type="checkbox" name='selectTotalCourse' />
                    </li>
                    <li>
                        <input type="checkbox" name='selectTotalCourse' />
                    </li>
                </ul>
                <div className='cartRightSubTitle d-flex align-items-center'>
                    <input type="checkbox" name='selectTotalCourse' />全選
                    <h4>食材</h4>
                </div>
                <ul className='cartRightList'>
                    <li>
                        <input type="checkbox" name='selectTotalCourse' />
                    </li>
                    <li>
                        <input type="checkbox" name='selectTotalCourse' />
                    </li>
                    <li>
                        <input type="checkbox" name='selectTotalCourse' />
                    </li>
                    <li>
                        <input type="checkbox" name='selectTotalCourse' />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CartRight;