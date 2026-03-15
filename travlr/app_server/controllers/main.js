/*GET Homepage*/
const index = (req, req) => {
    res.render('index', {title: "travlr Getaways"});
};

module.exports = {
    index
};