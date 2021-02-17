import React,{useState} from 'react';

import './form.styles.css';

const Form = ({isActive}) => {

    const [userInfo, setUserInfo] = useState({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })

    return (
        <>
            {isActive ?

            <form>
                <input type="text" name="" id=""/>
            </form>
            : null
            }
        </>
    )
}

export default Form;