import { storageService } from './async-storage.service.js'
import {utilService} from './util.service.js'

export const toyService = {
    query,
    getById,
    remove,
    save,
    getNewToy
}

// const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

const STORAGE_KEY = 'toy'
const gToys = [
    { _id: 't101', name: 'Talking Doll', price: 123, label: 'Doll', createdAt: 1631031801012, inStock: true },
    { _id: 't102', name: 'Barbie Doll', price: 200, label: 'Baby', createdAt: 1631031801016, inStock: true },
    { _id: 't103', name: 'Box game', price: 215, label: 'Puzzle', createdAt: 1631041801011, inStock: true },
    { _id: 't104', name: 'Doll', price: 500, label: 'Outdoor', createdAt: 1631036801012, inStock: true }
]

function query(filterBy) {
    return storageService.get(STORAGE_KEY).then(toys => {

        if (!toys || !toys.length) {
            storageService.postMany(STORAGE_KEY, gToys)
            toys = gToys
        }
        if (filterBy) {
            var { name, maxPrice, minPrice, date } = filterBy
            maxPrice = maxPrice || Infinity
            minPrice = minPrice || 0
            toys = toys.filter(toy =>
                toy.name.toLowerCase().includes(name.toLowerCase()) &&
                (toy.createdAt < date) &&
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
    console.log('toyId', toyId)
    return storageService.delete(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}

function getNewToy(){
    return {
        name: _makeName(),
        price: utilService.getRandomIntInclusive(100, 600),
        label: _makeLabel(),
        inStock: _getRandomStock(),
        createdAt: Date.now()
    }

    function _getRandomStock() {
        return utilService.getRandomIntInclusive(0, 1) === 1 ? true : false
    }
}

function _makeName(size = 1) {
    var words = ['Pizza', 'Tofu', 'Coffee', 'Waffle']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}
function _makeLabel(size = 1) {
    var words = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}