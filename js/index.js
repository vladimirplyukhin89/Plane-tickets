import start from "./modules/start.js";
import getPersonForm from "./modules/formPerson.js";

const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const { main, firstForm } = start(app, title);

    firstForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const forms = getPersonForm(firstForm.count.value);
        firstForm.remove();
        main.append(...forms);
    })
};

init('.app', 'Выберите тур');