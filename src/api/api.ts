import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '35a2bc33-9361-4658-a8b4-b1a6a75da53d'
    }
})
// упаковочка для всех методов для группировки:
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`) )
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`, {},)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`,)
    },
    getProfile(userId: number) {
        // console.warn('используется устаревший метод...')
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
    },
    savePhoto(photoFile: any) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: IProfile) {
        return instance.put<LoginResponseType>(`profile`, profile).then(res => res.data);
    }

}

export const authAPI = {
    me() {
        // возвращает promise всегда...
        return instance.get('auth/me')
    },
    // отправляем объект
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post<LoginResponseType>('/auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }

}

// types
export type LoginResponseType = {
    resultCode: number
    messages: string [],
    data: {
        userId: number
    }
}

export interface IPhotosType {
    small: string,
    large: string
}

export interface ContactsType {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export interface IProfile {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: IPhotosType
}



