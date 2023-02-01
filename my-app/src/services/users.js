import { inhabitants } from "../data/inhabitants";

// const getAll = async () => {

//     const response = await fetch("https://conectadas-1192e-default-rtdb.firebaseio.com/users.json")
//     const data = await response.json()

//     return data;

// }

const getAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inhabitants);
    }, [500]);
  });
};

const get = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inhabitants.find((elem) => elem.id.toString() === id));
    }, [500]);
  });
};

const add = (user) => {};

export const usersService = { getAll, get, add };
