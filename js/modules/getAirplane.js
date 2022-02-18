import createElement from "./createElements.js";

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
}

const createAirplane = (title, scheme) => {
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

const getAirplane = (main, data) => {
    const title = 'Выберите места';
    const scheme = ['exit', 11, 'exit', 1, 'exit', 17, 'exit'];

    main.append(createAirplane(title, scheme))
};

export default getAirplane;