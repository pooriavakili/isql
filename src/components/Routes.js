import App from "../App";
import Table from "./Table";

const Routes=[
    {
        exact:true,
        path:"/",
        component:App
    },
    {
        path: "/table",
        component: Table
    }

]
export default Routes