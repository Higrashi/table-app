import React, { useState, createRef } from 'react';
import TableRow from '../table-row/table-row.component';
import {ReactComponent as ArrowIcon} from '../../assets/icons/down-arrow.svg';
import {filterData} from '../../functions';
import UserPresentation from '../user-presentation/user-presentation.component';
import Spinner from '../spinner/spinner.component';
import './table.styles.css'


const Table = ({data, handleSorting, ref}) => {
   
    const [userData, setUserData] = useState({})
    const [sortIcon, setSortIcon] = useState('')
    let myRef = createRef();
    const hadleFind =(e) => {
        console.log(e.target.parentNode.id)
        const user = filterData(data,'email',e.target.parentNode.id);
        console.log(user)
       if(user) {
           setUserData(user)
           myRef.current.scrollIntoView()
        }
    }

    const sortData = (e) => {
        const id = e.target.id
        if(sortIcon === id) {
            setSortIcon('')
            handleSorting(id)
            return
        }
        setSortIcon(id)
        handleSorting(id)
        
    }

    return (
        <>
        <div className='main-table-container'>

        {
            data[0] ?
            <table className='table'>
            <thead>
            <tr className='row'onClick={sortData} >
            <th className='th-item' id='id'>id <ArrowIcon className={`arrow-icon ${sortIcon === 'id' && 'arrow-up'}`}/> </th>
            <th id='firstName' >First Name <ArrowIcon className={`arrow-icon ${sortIcon === 'firstName' && 'arrow-up'}`}/> </th>
            <th id='lastName' >Last Name <ArrowIcon className={`arrow-icon ${sortIcon === 'lastName' && 'arrow-up'}`}/> </th>
            <th id='email' >Email <ArrowIcon className={`arrow-icon ${sortIcon === 'email' && 'arrow-up'}`}/> </th>
            <th id='phone' >Phone <ArrowIcon className={`arrow-icon ${sortIcon === 'phone' && 'arrow-up'}`}/> </th>
            </tr>
       </thead>
       <tbody>
           {
               data.map((item) => {
                return <TableRow
                        id={item.id}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        email={item.email}
                        phone={item.phone}
                        onClick={hadleFind} />
               })
           }
         
       </tbody>
        </table> :
            <Spinner />
        }
          
         
          
       </div>
       
       <div ref={myRef} className='user-presentation-container'>
       {
           userData.firstName ?
            <UserPresentation userData={userData} /> :
            null
           
       }
        
        </div>
    
       </>    
    )
}

export default Table;