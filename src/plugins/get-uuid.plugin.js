const { v4: uuid4 } = require('uuid');

const getUUID = () => uuid4();

module.exports = {
  getUUID
}