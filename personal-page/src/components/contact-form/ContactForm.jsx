import React, {useState} from 'react'
import './ContactForm.styles.scss'
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    let navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
    });
    
const [btnDisabled,setBtnDisabled] = useState(true)
const [message,setMessage] = useState("")

const initialState = {
        name: "",
        email: "",
    };
        
const clearState = () => {
        setData({ ...initialState });
    };
    const handleInputChange = (event) => {
        if(data.name.length + 1 < 5){
            setMessage('Name must be at least 5 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        console.log(event.target.name)
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`sending data… ${data.name} ${data.email}`);
        const jsonData = JSON.stringify(data)
        localStorage.setItem('data', jsonData)
        clearState()

        setTimeout(() => {
            navigate("/");
            }, 1000);
    };   
      
  return (
    <>
    <h1>Contact</h1>
    <form onSubmit={handleSubmit} className='form'>
        <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
        className='form__input'
        />
        <input
        type="email"
        placeholder="email"
        value={data.email}
        onChange={handleInputChange}
        name="email"
        className='form__input'
        />
        <button type="submit" disabled={btnDisabled} className='form__button'>Submit</button>
        <p>{message}</p>
        </form>
    </>
  )
}

export default ContactForm