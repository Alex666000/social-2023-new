import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd8114a5c-5d70-419b-bdfc-b392c1edb4fe'
    }
})

// response type:
export interface IPhotosType {
    small: string,
    large: string
}

export interface IContactsType {
    facebook: string
    website: boolean
    vk: string
    twitter: string
    instagram: string
    youtube: boolean
    github: string
    mainLink: boolean
}

export interface IProfile {
    aboutMe: string
    contacts: IContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: IPhotosType
}

// упаковочка для всех методов для группировки:
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {},)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`,)
    },
    getProfile(userId: number) {
        // console.warn('используется устаревший метод')
        // используем делегирование обратимся к profileAPI если кто-то дернет метод
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get('profile/' + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}



