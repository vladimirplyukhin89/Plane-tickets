import start from "./modules/start.js";
import getPersonForm from "./modules/formPerson.js";
import getReadyPlane from "./modules/getReadyPlane.js";
import getData from "./modules/service/getTour.js";

const init = async (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = await getData();

    const { main, firstForm, h1 } = start(app, title, data);

    firstForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const tourData = data.find(tour => tour.id === firstForm.tour.value);
        h1.textContent = tourData.tour;

        const forms = getPersonForm(firstForm.count.value);
        firstForm.remove();
        main.append(...forms);

        getReadyPlane(forms, main, tourData);
    })
};

init('.app', 'Выберите тур');