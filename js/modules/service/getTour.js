const URL_API = 'https://61f4662310f0f7001768c90f.mockapi.io/api/airplane';

const getData = async () => {
    let promise = await fetch(URL_API);
    let response = await promise.json();
    return response;
}

getData();

export default getData;