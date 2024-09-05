import axios from 'axios'

const api = axios.create({
    baseURL: 'https://farmacia-nest-t0o5.onrender.com/',
})

export const getAll = async (url: string, setData: Function) => {
    const response = await api.get(url)
    setData(response.data)
}

export const create = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data)
    setData(response.data)
}

export const update = async (url: string, data: Object, setData: Function) => {
    const response = await api.post(url, data)
    setData(response.data)
}

export const del = async (url: string) => {
    await api.delete(url)
}
