import createAirplane from "./getAirplane.js"

const checkSeat = (form, data) => {
    form.addEventListener('change', () => {
        const formData = new FormData(form);
        const checked = [...formData].map(([, value]) => value);

        if (checked.length === data.length) {
            [...form].forEach(item => {
                if (item.checked === false && item.name === 'seat') {
                    item.disabled = true;
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
        }

        console.log(data);
    });

};

export default checkSeat;