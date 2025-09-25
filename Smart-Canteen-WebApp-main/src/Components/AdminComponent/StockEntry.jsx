import React from 'react'
import './StockEntry.css';
import { Link } from 'react-router-dom';

const StockEntry = () => {
    return (
        <>
            <div id="stockPage">
                <h1>Welcome to Stock Entry Page : </h1>
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
                                    <th className="headRow">Quantity(kg/litre)</th>
                                    <th className="headRow">Price</th>
                                    <th className="headRow">Expiry-date</th>
                                    <th className="headRow">Availabel(kg/l)</th>
                                </tr>
                            </thead>
                            <tbody id="bodyTable">
                                <tr className="bRow" id="bRow-1">
                                    <td className="bodyRow" id="">01
                                    </td>
                                    <td className="bodyRow">Wheat-Floor
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-1" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-1" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="expDate-1" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                                <tr className="bRow" id="bRow-2">
                                    <td className="bodyRow">02
                                    </td>
                                    <td className="bodyRow">Salt
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-2" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-2" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="expDate-2" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                                <tr className="bRow" id="bRow-3">
                                    <td className="bodyRow">03
                                    </td>
                                    <td className="bodyRow">Cooking-Oil
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-3" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-3" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="expDate-3" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                                <tr className="bRow" id="bRow-4">
                                    <td className="bodyRow">04
                                    </td>
                                    <td className="bodyRow">Turmeric-Powder
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-4" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-4" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="turmExp" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                                <tr className="bRow" id="bRow-5">
                                    <td className="bodyRow">05
                                    </td>
                                    <td className="bodyRow">Masala-Powder
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-5" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-5" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="expDate-5" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                                <tr className="bRow" id="bRow-6">
                                    <td className="bodyRow">06
                                    </td>
                                    <td className="bodyRow">Suger
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-6" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-6" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="expDate-6" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                                <tr className="bRow" id="bRow-7">
                                    <td className="bodyRow">07
                                    </td>
                                    <td className="bodyRow">Papad
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-7" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-7" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="expDate-7" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                                <tr className="bRow" id="bRow-8">
                                    <td className="bodyRow">08
                                    </td>
                                    <td className="bodyRow">Rice
                                    </td>
                                    <td className="bodyRow">
                                        <input type="number" id="inptQty-8" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="number" id="inptPrice-8" />
                                    </td>
                                    {/* let perKg is 35 then  */}
                                    <td className="bodyRow">
                                        <input type="date" id="expDate-8" />
                                    </td>
                                    <td className="bodyRow">10
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="Btns">
                        <div id="save">
                            <button id="saveBtn"><Link to="#">Save</Link></button>
                        </div>
                        <div id="reset">
                            <button id="resetBtn"><Link to="#">Reset</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default StockEntry
