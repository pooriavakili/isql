import App from "../App";
import Tables from "./Table";

const Routes=[
    {
        exact:true,
        path:"/",
        component:App
    },
    {
        path: "/tables",
        component: Tables
    }

]
export default Routes