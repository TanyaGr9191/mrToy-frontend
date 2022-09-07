import { httpService } from './http.service.js'

export const toyService = {
    query,
    getById,
    remove,
    save
}

const BASE_URL = `toy/`

function query(filterBy = { name: '', minPrice: 0 }) {
    return httpService.get(BASE_URL, { params: filterBy }).then(res => res)
}
function getById(toyId) {
    return httpService.get(BASE_URL + toyId).then(res => res)
}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId).then(res => res)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy).then(res => res)
    } else {
        return httpService.post(BASE_URL, toy)
            .then(res => res)
    }
}