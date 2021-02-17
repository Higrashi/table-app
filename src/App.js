import React,{useEffect, useState} from 'react';
import Table from './components/table/table.component';
import {sortData} from './functions'
import {bigData,smallData} from './data';
import ControlPanel from './components/control-panel/control-panel.component';
import Pagination from './components/pagination/pagination.component';
import './App.css';
function App() {
 
  const [data, setData] = useState({
    users: [],
    currentPage: 1,
    dataPerPage: 50
  });
  const [sortToggle, setSortToggle] = useState(false);
  const [dataType, setDataType] = useState();
  

  useEffect(() => {
    const getData = async () => {
    const data = await fetch(bigData)
      const res = await data.json()
      setData(prevState => {
        return {
          ...prevState,
          users: sortData(res, 'increase','id')
        }
      })
}
      getData()
     
  },[])

  useEffect(() => {
    setData(prevState => {
      return {
        ...prevState,
        currentPage: 1,
        users: []
      }
    })
    const getData = async () => {
      const data = await fetch(dataType)
      const res = await data.json()
      setData(prevState => {
        return {
          ...prevState,
          users: sortData(res, 'increase', 'id')
        }
      })
}
      getData()
  },[dataType])

  const handleSorting = (type) => {
      setSortToggle(!sortToggle)
     
      const direction = sortToggle ? 'increase' : 'decrease';
      setData(prevState => {
          return {
            ...prevState,
            users: sortData(data.users, direction,type)
          }
    })
      
  }

  const handlePageClick = (e) => {
    const id = e.target.id;
    setData((prevState) => {
        return {
          ...prevState,
          currentPage: Number(id)
        }
    })
  }

  const setCurrentPage = (page) => {
        setData(prevState => {
          return {
            ...prevState,
            currentPage: Number(page)
          }
        })
  }

  const setFindRes = (users) => {
    setData(prevState => {
      return {
        ...prevState,
        users: users
      }
    })

  }

  const addNewUser = (user) => {
    const newData = [...data.users];
    newData.unshift(user)
    setData(prevState => {
      return {
        ...prevState,
        users:sortData(newData, 'increase')
      }
    })
   
}

  const indexOfLastItem = data.currentPage * data.dataPerPage;
  const indexOfFirstItem = indexOfLastItem - data.dataPerPage;
  const currentData = data.users.slice(indexOfFirstItem, indexOfLastItem);
  
  
  return (
    <div className="App">
    
      <div>

      </div>
        <ControlPanel data={data.users} setFindRes={setFindRes} addNewUser={addNewUser} setDataType={setDataType} />
        <Table data={currentData} handleSorting={handleSorting} isSorting={sortToggle} />
        {
          data.users.length > 50 ?
          <Pagination
          onClick={handlePageClick}
          currentPage={data.currentPage}
          setCurrentPage={setCurrentPage}
          numOfData={data.users.length}
          />:
          null
        }
        
    </div>
  );
}

export default App;
