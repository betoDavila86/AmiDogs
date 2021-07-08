import { fetch, context } from '.';
import validations from './helpers/validations';

export default (function ({ email, password, nameDog, size, breed, character, gender, age }) {
    validations.stringFrontend(email, 'email');
    validations.stringFrontend(password, 'password');
    validations.stringFrontend(nameDog, 'nombre del perro');
    validations.stringFrontend(size, 'Tamaño');
    validations.stringFrontend(breed, 'Raza');
    validations.stringFrontend(character, 'Personalidad');
    validations.stringFrontend(gender, 'Género');
    validations.stringFrontend(age, 'Edad del perro');
    validations.email(email);

    const data = {
        email,
        password,
        nameDog,
        size,
        breed,
        character,
        gender,
        age
    }

    return (async () => {
        await fetch.post(`${this.API_URL}/users`, data)
    })()
}).bind(context)