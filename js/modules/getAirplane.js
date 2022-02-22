import createElement from "./createElements.js";
import checkSeat from "./checkSeat.js";

const createCockpit = (title) => {
    const cockpit = createElement('div', {
        className: 'cockpit',
    });

    const titleName = createElement('h1', {
        className: 'cockpit-title',
        textContent: title,
    });

    const button = createElement('button', {
        className: 'cockpit-confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    });

    cockpit.append(titleName, button);
    return cockpit;
};

const createExit = () => {
    const fuselage = createElement('div', {
        className: 'fuselage exit',
    });

    return fuselage;
};

const createBlockSeats = (n, count) => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const fuselage = createElement('ol', {
        className: 'fuselage',
    });

    for (let i = n; i < count + n; i++) {
        const wrapperRow = createElement('li');
        const seats = createElement('ol', {
            className: 'seats',
        });

        const seatsRow = letters.map(letter => {
            const seat = createElement('li', {
                className: 'seat',
            });

            const wrapperCheck = createElement('label');

            const check = createElement('input', {
                name: 'seat',
                type: 'checkbox',
                value: `${i}${letter}`,
            });

            wrapperCheck.append(check);
            seat.append(wrapperCheck);
            return seat;
        });

        seats.append(...seatsRow)
        wrapperRow.append(seats);
        fuselage.append(wrapperRow);
    };

    return fuselage;
};

const createAirplane = (title, tourData) => {
    const scheme = tourData.scheme;

    const choicesSeat = createElement('form', {
        className: 'choices-seat',
    });

    const plane = createElement('fieldset', {
        className: 'plane',
        name: 'plane',
    });

    const cockpit = createCockpit(title);
    plane.append(cockpit);

    let n = 1;

    const elements = scheme.map((item) => {
        if (item === 'exit') return createExit();
        if (typeof item === 'number') {
            const blockSeats = createBlockSeats(n, item);
            n = n + item;
            return blockSeats;
        }
    });

    choicesSeat.append(plane, ...elements);

    return choicesSeat;
};

// Ф-ия для склонения 
function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};



const getAirplane = (main, data, tourData) => {
    const title = `Выберите ${data.length} ${declOfNum(data.length, ['место', 'места', 'мест'])}`;
    const choiceForm = createAirplane(title, tourData);

    checkSeat(choiceForm, data, tourData.id);

    main.append(choiceForm);
};

export default getAirplane;