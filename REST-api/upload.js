// A Node.js module for parsing form data, especially file uploads
const formidable = require('formidable');


module.exports = function upload(req ,res) {
  //  create a new form
  const form = new formidable.IncomingForm();
  const upload_path = __dirname + "/uploads";

  const cleanFolder = function (folderPath) {
    // delete files inside folder but not the folder itself
    del.sync([`${folderPath}/**`, `!${folderPath}`]);
};

  // trigger the parsing of the form
  form.parse(req);

  form.on('field', (caption, field) => {
    console.log('Field', caption, field);

  });

  // Do something with the file
  form.on('file', (name, file) => {
    // e.g. save it to the database
    console.log('Uploaded file', name, file, __dirname);
    file.path = __dirname + '/uploads/' + file.name;
  });

  form.on('error', (err) => {
    console.error('Error', err);
    throw err;
  })

  // called when the form is completely parsed
  form.on('end', () => {
    // send back a success status code
    res.status(200).json( {
      result: 'Upload Success'
    });
    console.log('Upload path:', upload_path)
    // cleanFolder(upload_path);
  });
};


