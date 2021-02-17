import {emailRegex,letterRegex,phoneRegex,numberRegex} from './utils';

// export const compareValues = (a,b) => {
//     if ( a.id < b.id ){
//         return -1;
//       }
//       if ( a.id > b.id ){
//         return 1;
//       }
//       return 0;
// }

// export const compareValuesDecrease = (a,b) => {
//     if ( a.id > b.id ){
//         return -1;
//       }
//       if ( a.id < b.id ){
//         return 1;
//       }
//       return 0;
// }

// export const sortData = (data, direction) => {
//   if(direction === 'increase'){
//       return data.sort(compareValues)
//   }
//   return data.sort(compareValuesDecrease)
// }

export const compareValues = (a,b, type) => {
  if ( a[type] < b[type] ){
      return -1;
    }
    if ( a[type] > b[type] ){
      return 1;
    }
    return 0;
}

export const compareValuesDecrease = (a,b, type) => {
  if ( a[type] > b[type] ){
      return -1;
    }
    if ( a[type] < b[type] ){
      return 1;
    }
    return 0;
}

export const sortData = (data, direction, type) => {
    if(direction === 'increase'){
     return data.sort((a,b) => {
        if ( a[type] < b[type] ){
          return -1;
        }
        if ( a[type] > b[type] ){
          return 1;
        }
        return 0;
      })
    }
    return data.sort((a,b) => {
      if ( a[type] > b[type] ){
        return -1;
      }
      if ( a[type] < b[type] ){
        return 1;
      }
      return 0;
    })
}

export const fetchData = async (api) => {
    const data = await fetch(api)
    const res = await data.json()
    return res
}

export const filterData = (data, field, value) => {
  return data.filter(item => item[field] === value)[0];
}

export const filterByUserInput = (data, value) => {
  return  data.filter(item => {
    return item.firstName.toLowerCase() === value.toLowerCase()||
           item.lastName.toLowerCase() === value.toLowerCase()||
           item.email.toLowerCase().includes(value) === value.toLowerCase()||
           item.phone === value.toLowerCase()
  })
 
}

export const validateInput = (type, data) => {
  switch (type) {
    case 'email':
       return emailRegex.test(data)
    case 'phone':
      return phoneRegex.test(data)
    case 'letters':
      return letterRegex.test(data)
    case 'id':
      return numberRegex.test(data)      
    default:
      return false
  }
}

export const calculatePages = (len,dataPerPage) => {
  const pages = [];
  for(let i = 1; i <= Math.ceil(len / dataPerPage); i++) {
    pages.push(i)
 }

 return pages

}

