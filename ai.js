export function fetchData() {
    return Promise.resolve('data to fetched')
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error('division by zero')

    }

    return a / b;
}



export function getUser() {
    return { name: 'Real name' }
}