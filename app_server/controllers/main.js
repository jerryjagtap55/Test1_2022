// Index Page Controllor 
const index = function(req, res, next) {
    res.render('index', { title: 'Dream Catcher on Express' });
};

module.exports = {
    index
}
