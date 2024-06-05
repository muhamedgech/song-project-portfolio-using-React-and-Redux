// functions/getData.js

const jsonData = require('./data/data.json'); // Assuming your JSON data is stored in data.json file

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(jsonData),
  };
};
