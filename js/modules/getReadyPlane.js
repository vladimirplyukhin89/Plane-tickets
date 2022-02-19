import getAirplane from "./getAirplane.js";

const getReadyPlane = (forms, main, tourData) => {
    const data = [];

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // блокируем введённые данные из form.elements
            for (const element of form.elements) {
                element.disabled = true;
            };

            data.push({
                name: form.name.value,
                ticket: form.ticket.value
            });
            // Кол-во заполненных билетов = кол-ву обработанных билетов
            if (data.length === forms.length) {
                forms.forEach(form => form.remove());
                // Передаём в функцию отрисовки посадочных мест
                getAirplane(main, data, tourData);
            }
        })
    });
}

export default getReadyPlane;