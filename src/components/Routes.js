import App from "../App";
import Tables from "./Table";

const Routes=[
    {
        exact:true,
        path:"/",
        component:App
    },
    {
        path: "/table",
        component: Tables
    }

]
export default Routes