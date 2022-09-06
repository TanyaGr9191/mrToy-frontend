import { storageService } from './async-storage.service.js'

export const toyService = {
    query,
    getById,
    remove,
    save,
}

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

const STORAGE_KEY = 'toys'
const gToys = [
    { _id: 't101', name: 'Talking Doll"', price: 123, label: 'Doll', createdAt: Date.now(), inStock: true},
    { _id: 't102', name: 'Barbie Doll', price: 200, label: 'Baby', createdAt: Date.now(), inStock: true},
    { _id: 't103', name: 'Box game', price: 215, label: 'Puzzle', createdAt: Date.now(), inStock: true},
    { _id: 't104', name: 'Doll', price: 500, label: 'Outdoor', createdAt: Date.now(), inStock: true}
]

function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(toys => {

        if (!toys || !toys.length) {
            storageService.postMany(STORAGE_KEY, gToys)
            toys = gToys
        }
        if (filterBy) {
            var { label, maxPrice, minPrice, name } = filterBy
            maxPrice = maxPrice || Infinity
            minPrice = minPrice || 0
            toys = toys.filter(toy => 
                toy.label.toLowerCase().includes(label.toLowerCase()) && 
                toy.name.toLowerCase().includes(name.toLowerCase()) && 
                (toy.price < maxPrice) && 
                toy.price > minPrice)
        }

        return toys
    })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy.price = 140
        return storageService.post(STORAGE_KEY, toy)
    }
}
