// A Node.js module for parsing form data, especially file uploads
const formidable = require('formidable');
const del = require('del');

module.exports = function upload(req, res, next) {
  
  //  create a new incoming form
  const form = new formidable.IncomingForm({
    uploadDir: __dirname + '/uploads', 
    keepExtensions: true
  });

  // delete files inside folder but not the folder itself
  const cleanFolder = function (folderPath) {
    del.sync([`${folderPath}/*`, `!${folderPath}`]);
  };

  const upload_path = form.uploadDir;

  // trigger the parsing of the form
  form.parse(req);

  form.on('field', (caption, field) => {
    console.log('Caption: ', field);
  });

  // check if the file extension is valid
  form.on('file', (type, file) => {
    if (!file.name.match(/\.(jpg|jpeg|png)$/)) {
      res.status(400).json( {
        result: 'Bad Request! Only image files with extensions .png, .jpg and .jpeg are allowed.'
      });
      console.log('Invalid extension');
    } else {
      res.status(200).json( {
        result: 'Upload Success!!!'
      });
      console.log('Success!');
    }
    // console.log('Uploaded file', type, file, file.path);
  });

  form.on('error', (err) => {
    console.error('Error', err);
    throw err;
  })

  // called when the form is completely parsed
  form.on('end', () => {
    // delete the file
    cleanFolder(upload_path);
  });
};


