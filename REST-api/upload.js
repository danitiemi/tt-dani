// A Node.js module for parsing form data, especially file uploads
const IncomingForm = require('formidable').IncomingForm;

module.exports = function upload(req ,res) {
  //  create a new form
  const form = new IncomingForm();

  // Do something with the file
  form.on('file', (field, file) => {
    // e.g. save it to the database
    // you can access it using file.path
  });

  // called when the form is completely parsed
  form.on('end', () => {
    // send back a success status code
    res.json();
  });

  // trigger the parsing of the form
  form.parse(req);
};

