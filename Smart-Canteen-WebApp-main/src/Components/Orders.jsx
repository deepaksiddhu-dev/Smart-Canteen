import React from 'react'

import './ComponentCSS/Orders.css';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <>

            {/* Main contents  */}
            <div id="order_container">
                <h1 className="order_heading" >Older Messages : </h1>
                <div id="all_message_content">
                    <div className="messages_box">


                        {/* 1st row of order  */}
                        <div className="showing">
                            <div className="message_div">
                                <h2 className="message" >Preparing Order Details</h2>
                            </div>
                            <div className="message_content_row">
                                <div className="dishDetails">
                                    <div className="dishImage_div">
                                        <img className="dish_image" src="/images/dosa.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="dishInfo">
                                        <div className="Name">
                                            <label htmlFor="">Name : </label>
                                            <label htmlFor=""> Pizza</label>
                                        </div>
                                        <div className="Quantity">
                                            <label htmlFor="">Qty : </label>
                                            <label htmlFor="">2</label>
                                        </div>
                                        <div className="price">
                                            <label htmlFor="">Price : </label>
                                            <label htmlFor="">120</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="operationBtn">
                                    <div className="order_button">
                                        <button><Link to="ww.jdkd.comw.hdjf.com">seeReceipt</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* 2nd row of order  */}
                        <div className="showing">
                            <div className="message_div">
                                <h2 className="message" >Preparing Order Details</h2>
                            </div>
                            <div className="message_content_row">
                                <div className="dishDetails">
                                    <div className="dishImage_div">
                                        <img className="dish_image" src="/images/dosa.jpg" alt="" srcset="" />
                                    </div>
                                    <div className="dishInfo">
                                        <div className="Name">
                                            <label htmlFor="">Name : </label>
                                            <label htmlFor=""> Pizza</label>
                                        </div>
                                        <div className="Quantity">
                                            <label htmlFor="">Qty : </label>
                                            <label htmlFor="">2</label>
                                        </div>
                                        <div className="price">
                                            <label htmlFor="">Price : </label>
                                            <label htmlFor="">120</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="operationBtn">
                                    <div className="order_button">
                                        <button><Link to="ww.jdkd.comw.hdjf.com">seeReceipt</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders
