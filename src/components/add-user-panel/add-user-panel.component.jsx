import React,{useEffect, useState} from 'react'
import {validateInput} from '../../functions.js';
import { numberRegex, emailRegex } from '../../utils.js';
import './add-user-panel.styles.css';

const AddUserPanel = ({addNewUser, isActive, showAddPanel}) => {

    const [errorInput, setErrorInput] = useState(false);
    const [infoReady, setInfoReady] = useState(false);
    const [userInfo, setUserInfo] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    useEffect(() => {
        if(userInfo.id.length > 0 && userInfo.firstName.length >0
            &userInfo.lastName.length >0 && userInfo.email.length >0 && userInfo.phone.length >0){
                setInfoReady(true)
            } else {
                setInfoReady(false)
            }
    },[userInfo])

    const handleChange = (e) => {
        // if(userInfo.id && userInfo.firstName&&
        //     userInfo.lastName && userInfo.email&&
        //     userInfo.phone){
        //         setInfoReady(true)
        // }
        const {name, value} = e.target;
        setUserInfo(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const addUser = () => {
       if(validateInput('id', userInfo.id) &&
           validateInput('letters', userInfo.firstName)&&
           validateInput('letters', userInfo.firstName)&&
           validateInput('email', userInfo.email)&&
           validateInput('phone', userInfo.phone)
        ){
         addNewUser(userInfo)
        setUserInfo({
           id: '',
           firstName: '',
           lastName: '',
           email: '',
           phone: ''
        })
        showAddPanel()
        } else {
            setErrorInput(true)
        }
    }

    if(userInfo.id && userInfo.firstName
        &userInfo.lastName && userInfo.email && userInfo.phone){
            setInfoReady(true)
        }
    


    return (
        
        <div className={`add-user-panel ${isActive && 'active-panel'}`}>
                 <div className='user-panel-box'>
                     <label>id</label>
                     <input type="text" name='id' value={userInfo.id} onChange={handleChange}/>
                     {errorInput ? <p>Может содержать только цифры</p>: null}
                 </div>

                 <div className='user-panel-box'>
                     <label>First Name</label>
                     <input type="text" name='firstName' value={userInfo.firstName} onChange={handleChange}/>
                     {errorInput ? <p>Может содержать только буквы</p>: null}
                 </div>

                 <div className='user-panel-box'>
                     <label>Last Name</label>
                     <input type="text" name='lastName' value={userInfo.lastName} onChange={handleChange}/>
                     {errorInput ? <p>Может содержать только буквы</p>: null}
                 </div>

                 <div className='user-panel-box'>
                     <label>Email</label>
                     <input type="text" name='email' value={userInfo.email} onChange={handleChange}/>
                     {errorInput ? <p>Введите корректный адрес</p>: null}
                 </div>

                 <div className='user-panel-box'>
                     <label>Phone</label>
                     <input type="text" name='phone' value={userInfo.phone} onChange={handleChange}/>
                     {errorInput ? <p>Введите корректный номер</p>: null}
                 </div>

                 <button disabled={!infoReady}
                 onClick={addUser}
                 className={`add-btn ${!infoReady && 'disabled-btn'}
                   ${errorInput && 'error-btn'} 
                 `}>Добавить</button>

                 </div>  
    )
}

export default AddUserPanel;