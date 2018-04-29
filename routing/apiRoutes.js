const groupData = require('../app/data/friends');

module.exports = function(app) {
    app.get('/api/friends', (req, res) => {
        res.json(groupData);
    });

    app.post('/api/friends', (req,res) => {
        groupData.push(req.body);
    });
}