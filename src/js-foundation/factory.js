// const {getAge, getUUID} = require('../plugins')

const buildMakePerson = ({ getUUID, getAge }) => {

  return buildPerson = ({name, birthdate}) => {
  
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate)
    }
  }
}

module.exports = {
  buildMakePerson
}


// const obj = {name: 'John', birthdate: '1988-11-09'};

// const john = buildPerson(obj);

// console.log(john);



