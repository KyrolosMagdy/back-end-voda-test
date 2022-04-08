const User = require('../models/user');

exports.CreateUser = (req, res) => {
    const {name, avatar} = req.body;

    User.create({
        name,
        avatar
    }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log('err: ', err);
    })
}