import { inhabitants } from '../data/inhabitants'


const getAll = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(inhabitants)
        }, [3000])

    })

}

const get = (id) => {

} 

const add = (user) => {

} 


export const usersService = { getAll, get, add }