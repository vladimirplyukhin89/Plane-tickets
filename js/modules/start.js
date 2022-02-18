import createElement from "./createElements.js"

const createTitle = (title) => {
    const h1 = createElement('h1', {
        className: 'title',
        textContent: title,
    });

    return h1;
}

const createMain = () => {
    const main = document.createElement('main', {
        className: 'person-data',
    });

    return main;
}

const start = (app, title) => {
    const h1 = createTitle(title);
    const main = createMain();

    app.append(h1, main);


}

export default start;