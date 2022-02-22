const STORAGE = 'https://airplane-methed.herokuapp.com/airplane/';

export const getStorage = async (id) => {
    let promise = await fetch(`${STORAGE}${id}`);
    let response = await promise.json();

    return response?.seats || [];
};
// Для сравнения выбранных кресел
export const setStorage = (id, data) => {
    fetch(`${STORAGE}${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
};