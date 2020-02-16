import React, {useContext, useState} from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
import ContextProvider from "../stateManagment/Context";
export default function Headers() {
    const [isql,setIsql]=useState({
        Sal:1398
    })
    useContext(ContextProvider)
    return(
        <div className="Frag">
            <div>
           <div className="Div">
               <p className="ebtekhabSal" >
                   انتخاب سال
               </p>
               <select
                   defaultValue={isql}
                   onChange={setIsql}
                   className="Select"
               >
                   <option selected value="1">1397</option>
                   <option selected value="2">1398</option>

               </select>
           </div>
                 <div className="Mah">
                <p className="entekhabMah" >
                    انتخاب ماه
                </p>
                <select
                    defaultValue={isql}
                    onChange={setIsql}
                    className="MahSelect"
                >
                    <option selected value="1">مهر </option>
                    <option selected value="2">آبان </option>
                    <option selected value="1">آذر </option>
                </select>
                 </div>
            </div>
            <div className="Tablee">
                <Link to="/tables" className='FishHoghughy'>نمایش فیش حقوقی</Link>
            </div>
        </div>
    )
}