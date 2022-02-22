import { setStorage, getStorage } from "./service/storage.js";
import createElement from "./createElements.js";

const checkSeat = (dataResponse, form, data, id) => {
    const bookingSeat = dataResponse.map(item => item.seat);

    form.addEventListener('change', () => {
        const formData = new FormData(form);
        const checked = [...formData].map(([, value]) => value);

        // Разблокировка кнопки отправки выбранных билетов
        form.send.disabled = checked.length !== data.length;

        if (checked.length === data.length) {
            [...form].forEach(item => {
                if (item.checked === false && item.name === 'seat') {
                    item.disabled = true;
                }
            })
        } else {
            [...form].forEach(item => {
                if (!bookingSeat.includes(item.value) && item.name === 'seat') {
                    item.disabled = false;
                }
            })

        }

    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const booking = [...formData].map(([, value]) => value);

        for (let i = 0; i < data.length; i++) {
            data[i].seat = booking;
        };

        setStorage(id, data);

        form.remove();

        document.body.innerHTML = `
            <h1 class="title">Спасибо, хорошего полёта</h1>
            <h2 class="title">${booking.length > 2 ?
                `Ваши места - ${booking}` :
                `Ваше место - ${booking}`
            }</h2>
    `;

        const button = createElement('button', {
            className: 'cockpit-confirm',
            type: 'submit',
            textContent: 'Вернуться на главную',
        });

        const div = createElement('div', {
            className: 'title',
        });

        div.append(button);
        document.body.append(div);

        button.addEventListener('click', (e) => {
            e.preventDefault();

            location.reload();
        });
    });

};

export default checkSeat;