import start from "./modules/start.js";
import getPersonForm from "./modules/formPerson.js";
import getReadyPlane from "./modules/getReadyPlane.js";

const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const { main, firstForm } = start(app, title);

    firstForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const forms = getPersonForm(firstForm.count.value);
        firstForm.remove();
        main.append(...forms);

        getReadyPlane(forms, main);
    })
};

init('.app', 'Выберите тур');