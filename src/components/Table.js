import React,{useContext,Fragment} from 'react';
import {Table} from "react-bootstrap";
import ContextProvider from "../stateManagment/Context";
import "./table.css"
import Table2 from "./Table2";
import Table3 from "./Table3";
import Table4 from "./Table4";
import Table5 from "./Table5";
import Table6 from "./Table6";
export default function Tables() {
    useContext(ContextProvider);
    return (
        <Fragment>
            <div className='Sherkat'>
                <img src={require("./../assets/img/isqi-logo-revised.png")} alt=""/>
            </div>
            <div className="Neveshte">
                <h1 className="NeveshteStyle"
                >فیش حقوقی دی ماه سال 1398</h1>
            </div>
        <div>
        <Table className="Table">
            <thead>
            <tr>
                {
                Table4.map(
                    (item,index)=>
                    (
                    <th key={item.id}
                        className='Rang1'>
                        {item.title}</th>
                ))
            }
            </tr>
            </thead>
            <tbody>
            <tr>
                {
                    Table2.map(
                        (item,index)=>(
                        <td key={item.id} className='Black'>{item.title}</td>
                    ))
                }
            </tr>
            <tr>
                {
                    Table5.map(
                        (item,index)=>
                        <td key={item.id} className='Black1'>{item.title}</td>
                    )
                }
            </tr>
            <tr>
                {
                    Table3.map(
                        (item,index)=>(
                        <td key={item.id} className='Black'>{item.titleOne}</td>
                    ))
                }
            </tr>
            <tr>
                {
                    Table6.map
                    (
                        (item,index)=>(
                        <td
                            key={item.id}
                            className='Black1'>{item.title}</td>
                    ))
                }
            </tr>
            <tr>
                <td
                 >
                </td>
                <td className='Black'>اضافه کاری</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black1'>ایاب و ذهاب</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black'>مزایای متفرقه</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black1'>روند ماه قبل</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black'>بن کارگری</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td className='Black1'>سنوات</td>
                <td></td>
            </tr>
            <tr>
                <td
                    className='Black'
                >
                    دستمزد روزانه (ریال)
                </td>
                <td
                    className='Black'
                >

                 جمع حقوق ومزایا (ریال)
                </td>
                <td
                    className='Black'
                >
جمع کسور(ریال)
                </td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td
                    className='Black1'
                >
                   خالص پرداختی (ریال)
                </td>
                <td>
                </td>
            </tr>
            </tbody>
        </Table>
        </div>
        </Fragment>
    );
}
