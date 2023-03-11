// import React, { useState,useEffect} from 'react';
// import axios from 'axios';
// import InventoryIcon from '@mui/icons-material/Inventory';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupsIcon from '@mui/icons-material/Groups';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SettingsIcon from '@mui/icons-material/Settings';
import './design.css';

const Welcome = () => {

  const handleChange= ()=>{
    
  }
  // const [getuser, getUser] = useState();
  // const sendRequest = async ()=>{
    // const res = await axios.get("http://localhost:5000/api/getuser",{
      // withCredentials:true,
    // })
    // .catch((err)=>console.log(err));
    // const data = await res.data;
    // return data;
  // };
  // useEffect(()=>{
    // sendRequest().then((data)=>getUser(data.getuser))
    // 
    // 
//  },[])
// 
  // const handleChange = ()=>{
// 
  // }
  return (
    <div>
     {/* <div> */}
   {/* {getuser && <h1>{getuser.name}</h1>} */}
 {/* </div> */}
 <main className='side-bar'>
     <span onClick={handleChange}><DashboardIcon/><span className='arrange-sidebar' onClick={handleChange}>Dashboard</span></span><br/>
      <p>Clint Facing</p>
     <span><HomeIcon/><span className='arrange-sidebar'>Home</span></span><br/>
     <span><ShoppingCartIcon/><span className='arrange-sidebar' >Products</span></span><br/>
     <span><GroupsIcon/><span className='arrange-sidebar'>Customers</span></span><br/>
     <span><ReceiptLongIcon/><span className='arrange-sidebar'>Transaction</span></span><br/>
     <span><StackedLineChartIcon/><span className='arrange-sidebar'>Buyers & Suppliers</span></span><br/>
     <span><SettingsIcon/><span className='arrange-sidebar'>Admin</span></span><br/>
     
      {/* <label> <InventoryIcon/> */}
        {/* <h4>Home</h4></label> */}
      {/* <h4>Home</h4> */}
      {/* <h4>Transaction</h4> */}
      {/* <h4>Quatations</h4> */}
      {/* <h4>All Documents</h4> */}
      {/* <h4>Products</h4> */}
       
       
       
  </main>
    </div>
  )
}

export default Welcome