import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '08dcbd00-c9ba-492d-8511-2f92ca925785'
    }
})

// обернем функцию логикой:

/*export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(  `users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}*/

// упаковочка для всех методов для группировки:
export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(  `users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}
