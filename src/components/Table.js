import React,{useContext} from 'react';
import {Table} from "react-bootstrap";
import ContextProvider from "../Context";
import "./table.css"
function Tables() {
    useContext(ContextProvider);
    return (
        <div>
            <h1>فیش حقوقی دی ماه سال 1398</h1>
        <Table className="Table">
            <thead>
            <tr>
                <th>کسور</th>
                <th>مزایا</th>
                <th>کارکرد</th>
            </tr>
            </thead>
            <tbody>
            <tr>

                <td>بیمه سهم کارمند</td>
                <td>حقوق پایه</td>
                <td>کارکرد عادی</td>

            </tr>
            <tr>

                <td>مالیات</td>
                <td>حق جذب</td>
                <td>ساعت اضافه کار</td>

            </tr>
            <tr>

                <td>روند ماه جاری</td>
                <td>حق مسکن</td>
                <td>تعداد ایاب ذهاب</td>

            </tr>
            <tr>
                <td>بیمه تکمیلی سهم کارمند</td>
                <td>حق اولاد</td>
                <td>کارکرد موثر</td>

            </tr>

            <tr>
                <td
                 >
                </td>
                <td>اضافه کاری</td>
                <td></td>

            </tr>

            <tr>
                <td
                >
                </td>
                <td>ایاب و ذهاب</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td>مزایای متفرقه</td>
                <td></td>
            </tr>
            <tr>
                <td
                >
                </td>
                <td>روند ماه قبل</td>
                <td></td>
            </tr>
            <tr>
                <tr
                >
                </tr>
                <td>بن کارگری</td>
                <th></th>
            </tr>
            <tr>
                <td
                >
                </td>
                <td>سنوات</td>
                <td></td>
            </tr>
            </tbody>
        </Table>
        </div>
    );
}

export default Tables;
