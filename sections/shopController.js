const shop = require('../services/shopService.js');
function index(req, res) {
  ensureSession(req.session);
  shop.all((err, items), () => {
      const warenkorb = req.session.warenkorb; items.forEach(item => {
      item.count = warenkorb[item._id] || 0;
    }); 
    res.render("index", {items: items, 
      warenkorbCount: getCountFromSession(req)});    })};
function bestellung(req, res) {
  shop.all((err, items) => {
    const slctdItems = Object.keys(req.session.warenkorb).map(key => {
      return {item: items.find(x => x._id === key),
        count: req.session.warenkorb[key]
      };   });
    const preis = slctdItems.reduce((previous, current) => previous +
      current.item.preis * current.count, 0);
    req.session.warenkorb = {};
    res.render("bestellung", {items: slctdItems, preis: preis,
      warenkorbCount: 0
    });    })};
function add(req, res) {
  req.session.warenkorb[req.body.id] = (req.session.warenkorb[req.body.id] || 0) + 1;
  res.redirect("/");  };
function remove(req, res) {
  req.session.warenkorb[req.body.id] = Math.max(0, (req.session.warenkorb[req.body.id] || 0) - 1);
  res.redirect("/");  };
function getCountFromSession(req) {
  return Object.values(req.session.warenkorb).reduce((previous, current) =>
    previous += current, 0);   };
function ensureSession(session) {
  if (!session.warenkorb) {session.warenkorb = {};}   };
module.exports = {index, add, remove, bestellung};