import createElement from "./createElements.js";

const checkSeat = (form, data) => {
    form.addEventListener('change', () => {
        const formData = new FormData(form);
        const checked = [...formData].map(([, value]) => value);

        if (checked.length === data.length) {
            [...form].forEach(item => {
                if (item.checked === false && item.name === 'seat') {
                    item.disabled = true;
                }
            });
        };
    });

    const title = createElement('h2', {
        className: 'title',
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const booking = [...formData].map(([, value]) => value);

        for (let i = 0; i < data.length; i++) {
            data[i].seat = booking;
        };

        form.remove();

        document.body.innerHTML = `
            <h1 class="title">Спасибо, хорошего полёта</h1>
            <h2 class="title">${booking.length > 2 ?
                `Ваши места - ${booking}` :
                `Ваше место - ${booking}`
            }</h2>
    `;
    });

};

export default checkSeat;