import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Reserve.styles.scss'

const Reserve = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        date: "",
        time: "",
    });

const initialState = {
        name: "",
        date: "",
        time: "",
    };
        
const clearState = () => {
        setData({ ...initialState });
    };
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`sending data… ${data.name} ${data.date} ${data.time} `);
        let dataArray = JSON.parse(localStorage.getItem('reserve')) || [];
        dataArray.push(data)
        localStorage.setItem('reserve', JSON.stringify(dataArray))
        clearState()

        setTimeout(() => {
            navigate("/");
            }, 1000);
    };   
      
  return (
    <>
    <h1 className='reserve__title'>Reserve</h1>
    <div>
    <form onSubmit={handleSubmit} className='reserve__form'>
        <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
        className='reserve__input'
        required
        />
        <input
        type="date"
        value={data.date}
        min="2023-01-01"
        max="2023-12-31"
        onChange={handleInputChange}
        name="date"
        className='reserve__input'
        required
        />
        <input
        type="time"
        value={data.time}
        min="19:00"
        max="23:00"
        onChange={handleInputChange}
        name="time"
        className='reserve__input'
        required
        />
        <button type="submit" className='reserve__button'>Submit</button>
    </form>
    </div>
    </>
  )
}

export default Reserve
