import React,{useState} from 'react';
import {filterByUserInput} from '../../functions';
import AddUserPanel from '../add-user-panel/add-user-panel.component';
import {bigData, smallData} from '../../data';

import './control-panel.styles.css';

const ControlPanel = ({data, setFindRes, addNewUser, setDataType}) => {

    const [searchInput,setSearchInput] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [selectValue, setSelectValue] = useState('big');
    const [notFound,setNotFound] = useState(false)
    
    const handleSearch = (e) => {
        setSearchInput(e.target.value)
    }

    const findUsers = () => {
        const user = filterByUserInput(data,searchInput);
        if(user[0]) {
            setNotFound(false)
            setFindRes(user)
            setSearchInput('')
            return
        } 
        setNotFound(true)
    }
    
    const showAddPanel = () => {
        setIsActive(!isActive)
    }

    const handleSelect = (e) => {
        const value = e.target.value;
        setSelectValue(value)
        if(value === 'big'){
            setDataType(bigData)
            return
        }
        setDataType(smallData)
        
    }
    const refreshPage = () => {
       window.location.reload(); 
    }

    return (
        <>
        <div className='control-panel'>
            <button className='refresh-btn' onClick={refreshPage}>Обновить</button>
            <div>
            <input type="text" onChange={handleSearch} value={searchInput} />
            <button onClick={findUsers}>Поиск</button>
            {
                notFound ? <span>Пользователь не найден</span> : null
            }
            
             </div>
             <select onChange={handleSelect} value={selectValue}>
                <option value='big'>Big Data</option>
                <option value='small'>Small Data</option>
                </select>

             <button onClick={showAddPanel}> {isActive ? 'Закрыть' : 'Добавить'} </button> 
        </div>

        {
            isActive ?
            <AddUserPanel addNewUser={addNewUser} isActive={isActive} showAddPanel={showAddPanel}/> : 
            null 
        }
        
        </>
    )
}

export default ControlPanel;