const Error500Server = (err, req, res, next) => {
  res.status(500).render('500', { layout: false });
};

const Error404Client = (req, res) => {
  res.status(404).send('Error 404 page not found');
};


module.exports = {
  Error500Server,
  Error404Client
};
