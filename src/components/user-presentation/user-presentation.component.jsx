import React from 'react';

import './user-presentation.styles.css';

const userPresentation = ({userData}) => {

    return (
        <div className='user-presentation' >
           <span >Выбран пользователь:<b> {userData.firstName} {userData.lastName}</b></span>
           <span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nullam ac tortor vitae purus faucibus ornare suspendisse. Penatibus et
            magnis dis parturient. Semper viverra nam libero justo laoreet sit amet
            cursus sit. Ut aliquam purus sit amet. </p></span>
            {userData.address ?
                 <> 
                 <span>Адрес проживания: <b>{userData.address.streetAddress}</b> </span>
                     <span>Город: <b>{userData.address.city}</b> </span>  
                     <span>Провинция/штат: <b>{userData.address.state}</b> </span>
                     <span >Индекс: <b>{userData.address.zip}</b> </span>    
                   </>  :
                   null     
        }
       
        </div>
    )
}

export default userPresentation;