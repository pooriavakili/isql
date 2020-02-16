import Homes from "./Home";
import SignOut from "./SignOut";
import Headers from "./Headers";
import BankPishnahadat from "./BankPishnahadat";
import KarnameAmalCard from "./KarnameAmalCard";
import TagirKalameUbour from "./TagirKalemeUbour";
import App from "../App";
import Tables from "./Table";
const Routes=[
    {
      exact:true,
      path:"/",
      component:App
    },
    {
        exact:true,
        path:"/homes",
        component:Homes
    },
    {
        exact:true,
        path:"/signOut",
        component:SignOut
    },

    {
        exact:true,
        path:"/headers",
        component:Headers
    },
    {
        exact:true,
        path:"/bankPishnahadat",
        component:BankPishnahadat
    },
    {
        exact:true,
        path:"/karnameAmalCard",
        component:KarnameAmalCard
    },
    {
        exact:true,
        path:"/taghirKalameUbour",
        component:TagirKalameUbour
    },
    {
        exact:true,
        path:"/tables",
        component:Tables
    }

]
export default Routes