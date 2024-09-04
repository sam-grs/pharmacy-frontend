import axios from 'axios'

const api = axios.create({
    baseURL: 'https://farmacia-nest-t0o5.onrender.com/',
})

export const getAll = async (url: string, setData: Function, header: Object) => {
    const response = await api.get(url, header)
    setData(response.data)
}

export const create = async (url: string, data: Object, setData: Function, header: Object) => {
    const response = await api.post(url, data, header)
    setData(response.data)
}

export const update = async (url: string, data: Object, setData: Function, header: Object) => {
    const response = await api.post(url, data, header)
    setData(response.data)
}

export const del = async (url: string, header: Object) => {
    await api.delete(url, header)
}
