// const {getAge, getUUID} = require('./plugins')
// const { emailTemplate } = require('./js-foundation/template');
// require('./js-foundation/destructuring');
// const {getUserById} = require('./js-foundation/callbacks');
// const {getUserById} = require('./js-foundation/arrow-function');
// require('./js-foundation/factory');
// const { buildMakePerson } = require('./js-foundation/factory');
const getPokemonById = require('./js-foundation/promises');

getPokemonById(1)
  .then((pokemon) => console.log({pokemon}) )
  .catch((error) => console.log('Por favor intente de nuevo'))
  .finally(() => console.log('Fin'));

// ! Referencia a la función factory y uso
// const buildPerson = buildMakePerson({ getUUID, getAge });
// const obj = {name: 'John', birthdate: '1988-11-09'};
// const john = buildPerson(obj);
// console.log(john);