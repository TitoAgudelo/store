var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}

function getProducts(req, res, next) {
  res.status(200).send(data.products);
}

function getProduct(req, res, next) {
  var id = +req.params.id;
  var product = data.products.filter(function(p) {
    return p.id === id;
  })[0];

  if (product) {
    res.status(200).send(product);
  } else {
    four0four.send404(req, res, 'product ' + id + ' not found');
  }
}

function getCategories(req, res, next) {
  res.status(200).send(data.categories);
}

function getCategory(req, res, next) {
  var id = +req.params.id;
  var category = data.categories.filter(function(p) {
    return p.id === id;
  })[0];

  if (category) {
    res.status(200).send(category);
  } else {
    four0four.send404(req, res, 'product ' + id + ' not found');
  }
}

