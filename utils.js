export function findById(array, id) {
    return array.find(item => item.id === id);
}

export function setUser(formData) {
    const newUser = {
        name: formData.get('name'),
        character: formData.get('character'),
        health: 120,
        galleons: 20,
        completed: {},
    };
    const stringyNewUser = JSON.stringify(newUser);
    localStorage.setItem('USER', stringyNewUser);
}

const defaultEmptyStorage = [];
const STORAGE = 'STORAGE';

export function clearStorage() {
    const stringyDefaultEmptyStorage = JSON.stringify(defaultEmptyStorage);

    localStorage.setItem(STORAGE, stringyDefaultEmptyStorage);
}