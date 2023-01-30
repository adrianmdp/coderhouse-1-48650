import { inhabitants } from '../data/inhabitants'


const getAll = async () => {

    const response = await fetch("https://conectadas-1192e-default-rtdb.firebaseio.com/users.json")
    const data = await response.json()

    return data;
     
}

// const getAll = () => {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(inhabitants)
//         }, [3000])

//     })

// }

const get = (id) => {

} 

const add = (user) => {

} 


export const usersService = { getAll, get, add }