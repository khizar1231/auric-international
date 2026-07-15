import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
export const ShopContext = createContext();

const ShopContextProvider = (props)=>{
  const currency = "$";
  const delivery_fee =10;

  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false);
  const [cartItems,setCartItems] = useState({});
  const navigate = useNavigate();
  const [user,setUser] = useState(()=>
    {
     const storedUser = localStorage.getItem("pos-user");
    return storedUser ? JSON.parse(storedUser):null;
    });

    const login = (userdata,token)=>
    {
       setUser(userdata)
       localStorage.setItem("pos-user",JSON.stringify(userdata));
       localStorage.setItem("pos-token",token);
    }

    const logout = (userdata,token)=>
    {
        setUser(null);
        localStorage.removeItem("pos-user")
        localStorage.removeItem("pos-token")
        navigate("/admin/login");
    }

  const value = {
    currency,delivery_fee,navigate,showSearch,search,user,login,logout
  }
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )

}
export default ShopContextProvider;