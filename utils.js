export function findById(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}