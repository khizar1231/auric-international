import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
const Root = ()=>
{
    const {user} = useContext(ShopContext);
    const navigate = useNavigate();

    useEffect(()=>
    {
        if(user){
         if(user.role === "admin")
         {
            navigate("/admin/add")
         }
         else {
            navigate("/admin/login")
         }}
         else{
            navigate("/admin/login")
         }
    },[user,navigate])
    return null;
}
export default Root;