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
    
    const validateEmail = (email) => {
        const emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
        return emailRegex.test(email);
      };
    
      const handleValidation = () => {
        setIsValid(validateEmail(email));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`sending data… ${data.name} ${data.email}`);
        let dataArray = JSON.parse(localStorage.getItem('user')) || [];
        dataArray.push(data)
        localStorage.setItem('user', JSON.stringify(dataArray))
        clearState()

        setTimeout(() => {
            navigate("/");
            }, 1000);
    };   
      
  return (
    <>
    <h1 className='form__title'>Contact</h1>
    <div>
    <form onSubmit={handleSubmit} className='form__formulario'>
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
        <button type="submit" disabled={btnDisabled} className='form__button' onClick={handleValidation}>Submit</button>
        <p>{message}</p>
    </form>
    </div>
    </>
  )
}

export default ContactForm