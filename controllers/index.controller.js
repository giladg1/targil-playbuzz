const request = require('postman-request');
const _ = require('lodash');

const getVideoItems = (req, res, next) => {
    req.winston.info('requst made fot items with :', req.body);
    request('https://cdn.playbuzz.com/content/feed/items', (error, response, body) => {
        req.winston.info('error:', error); // Print the error if one occurred
        req.winston.info('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        req.winston.info('body:', body); // Print the HTML for the Google homepage.

        res.setHeader('Content-Type', 'application/json');

        let clientResponse = JSON.parse(body);
        let filter = _.get(req, 'body.ourFilterQuery', '');
        // if we got a query to filter, let's found out all items in the relevant type, else return all items
        if (filter !== 'none' && filter !== '') {
            clientResponse = clientResponse.items.map(x => x).filter(x => {
                return x.source === filter
            });
        } else {
            clientResponse = clientResponse.items
        }

        req.winston.info('return client: ', clientResponse);
        res.status(200).send(JSON.stringify(clientResponse));

    }).on('error', (err) => {
        console.log(err);
        res.status(500).render('error', {message: err});
    });
};

const mainPage = (req, res, next) => {
    req.winston.info('request was made for main playbuzz video service');
    res.status(200).render('index', {title: 'Playbuzz Video Service'});
};

module.exports = {getVideoItems, mainPage};
