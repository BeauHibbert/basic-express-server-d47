'use strict';

// function handle500(req, res, next){
//   res.status(500).send('500 error');
// }

// module.exports = handle500;

module.exports =  
function (err, req, res, next){
  const error = err.message ? err.message : err;

//   const errorObject = {
//     status: 500,
//     path: req.path,
//     message: error,
//   };

//   res.status(500).json(errorObject);
  res.status(500).send(error);
};