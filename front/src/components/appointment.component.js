import axios from 'axios';
import {useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function Form() {
    const [availableDates, setAvailableDates] = useState([]);
    const [chosen, setChosen] = useState("");
    const [cookies, setCookie] = useCookies(['colibrisID']);

    useEffect(()=>{
        getAllWeek()
    }, [] )
    const getUserInfo = () => { 

    }
    const getAllWeek = ()=>{
        let today = new Date();
        let location = "Ben Arous";
        let deliveryDate;
        today.setDate(today.getDate() + 1);
        switch (location){
            case "Ariana": deliveryDate = 1; break;
            case "Ben Arous": deliveryDate = 2; break;
            case "Marsa": deliveryDate = 3; break;
            case "Tunis": deliveryDate = 4; break;
            case "": deliveryDate = 5; break;
            case "a": deliveryDate = 6; break;
            case "b": deliveryDate = 0; break;
            default: deliveryDate = -1
        }
        while(today.getDay() != deliveryDate && deliveryDate != -1){
            today.setDate(today.getDate() + 1);
        }
        let days = [(today+"").substring(4,15)];
        today.setDate(today.getDate() + 7)
        days.push((today+"").substring(4,15))
        setAvailableDates(days)
    }

    const Submit = async ()=>{
        let response = await axios.post("http://localhost:5000/appointment", {userID : cookies.colibrisID, date: chosen });
        if(response.data.error){
            window.alert("Server error !!")
        }
        else {
            window.alert(response.data)
            window.location.href = "/"}
    }
    return (
        <div className="wrapper">
          <div id="content">
            <div className="contact">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title mt-5">
                      <h2>
                        A<strong className="black">ppointment</strong> :
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="container-fluid">
              
              <select onChange={(e)=>{setChosen(e.target.value)}}>
                  <option>--choose a date for your appointement--</option>
                  {availableDates.map((date)=>(
                      <option>{date}</option>
                  ))}
              </select>
              <button onClick={Submit}>Submit</button>
            </div>
          </div>
        </div>
    )
}