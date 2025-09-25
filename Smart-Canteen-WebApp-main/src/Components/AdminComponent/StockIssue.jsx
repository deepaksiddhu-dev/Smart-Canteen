import React from 'react'
import './StockIssue.css';
import { Link } from 'react-router-dom';

const StockIssue = () => {
    return (
        <div id="stockPage">
            <h1>Welcome to Stock Issue Page : </h1>
            <div id="allStock">
                <div className="addList">
                    <div className="addNew">
                        <button id="addBtn">Add-New-Item</button>
                    </div>
                </div>
                <div id="stock">
                    <table>
                        <thead id="headTable">
                            <tr className="hRow">
                                <th className="headRow">S.<br />no</th>
                                <th className="headRow" id="nameItem">Name-Item</th>
                                <th className="headRow">Carry-Quantity</th>
                                <th className="headRow">Availabel(kg/l)</th>
                            </tr>
                        </thead>
                        <tbody id="bodyTable">
                            <tr className="bRow">
                                <td className="bodyRow">01</td>
                                <td className="bodyRow">Wheat-Floor</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                            <tr className="bRow">
                                <td className="bodyRow">02</td>
                                <td className="bodyRow">Salt</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                            <tr className="bRow">
                                <td className="bodyRow">03</td>
                                <td className="bodyRow">Cooking-Oil</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                            <tr className="bRow">
                                <td className="bodyRow">04</td>
                                <td className="bodyRow">Turmeric-Powder</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                            <tr className="bRow">
                                <td className="bodyRow">05</td>
                                <td className="bodyRow">Masala-Powder</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                            <tr className="bRow">
                                <td className="bodyRow">06</td>
                                <td className="bodyRow">Suger</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                            <tr className="bRow">
                                <td className="bodyRow">07</td>
                                <td className="bodyRow">Papad</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                            <tr className="bRow">
                                <td className="bodyRow">08</td>
                                <td className="bodyRow">Rice</td>
                                <td className="bodyRow ">
                                    <input type="number" id="inptQnt-1" />

                                </td>
                                {/* let perKg is 35 then  */}
                                <td className="bodyRow">10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="Btns">
                    <div id="save">
                        <button id="saveBtn"><Link to="www.google.com">Save</Link></button>
                    </div>
                    <div id="reset">
                        <button id="resetBtn"><Link to="www.google.com">Reset</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockIssue
