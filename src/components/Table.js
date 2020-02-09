import React,{useContext} from 'react';
import {Table} from "react-bootstrap";
import ContextProvider from "../Context";
import "./table.css"
function Tables() {
    useContext(ContextProvider);
    return (
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
                <th
                 >اضافه کاری
                </th>
            </tr>

            <tr>
                <td>ایاب وذهاب</td>
            </tr>
            <tr>
                <td>مزایای متفرقه</td>
            </tr>
            <tr>
                <td>روند ماه قبل</td>
            </tr>
            <tr>
                <td>بن کارگری</td>
            </tr>
            <tr>
                <td>سنوات</td>
            </tr>
            </tbody>
        </Table>
    );
}

export default Tables;
