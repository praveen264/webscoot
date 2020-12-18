import Axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Login from "../auth/Login";
import "./Home.css";
import axios from 'axios';
export default function Home() {
  const { userData } = useContext(UserContext);
 const [tag,setTag]=useState("");
 const [datepop,setDatePop]=useState("");
 const [time,setTime]=useState("");
 const [listofdatas,listofdata]=useState([]);
 async function fetchdata()
 {
   const result = await axios.get("https://hn.algolia.com/api/v1/search_by_date?tags="+tag+"&numericFilters=created_at_i>"+time);
console.log(result.data.hits)
listofdata(result.data.hits);
  }
  fetchdata();
  console.log(userData);
  return (
    <div className="page">
     
      {userData.user ? (
        <>
        
         <div className="div1">
           <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png"></img>
         <b> {userData.user.displayName}</b>
        <i className="fa fa-search"  />

         <input type="search" placeholder="Search by users"></input>
         </div>
         <div className="div2">
             <div>Search
               <select onChange={(e)=>setTag(e.target.value)}>
                 <option value="">All</option>
                  <option value="story" selected>Stories</option>
                 
                  <option value="comments">Comments</option>
               </select>
               by
               <select  onChange={(e)=>setDatePop(e.target.value)}>
                 <option value="">All</option>
                  <option value="" selected>Popularity</option>
                 
                  <option value="date">Date</option>
               </select>
               for
               <select onChange={(e)=>setTime(e.target.value)}>
                 <option value="0" selected>All Time</option>
                  <option value="600000" >Last 24 hours</option>
                 
                  <option value="600000">Date</option>
               </select>
               </div> 
               <div>
                 {
                   listofdatas.map((item)=>{

                     return <p>{item.title}</p>
                   })
                 }
               </div>

         </div>
       
        {/* <table border="1">
        <tr><td>Welcome</td> <td>{userData.user.displayName}</td></tr>

        
        <tr><td>Email</td> <td>{userData.user.email}</td></tr>
       
        <tr><td>Contact Number</td> <td>{userData.user.contact}</td></tr>
       
        <tr><td>Address</td> <td> {userData.user.address}</td></tr>
        </table> */}
        </>
      ) : (
        <>
         
          <Login></Login>
        </>
      )}
    </div>
  );
}
