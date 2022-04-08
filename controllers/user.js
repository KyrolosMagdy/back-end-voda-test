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
};

exports.GetAllUsers = (req, res) => {
    User.findAll().then(result => {
        if (result) {
            res.send(result);
        } else {
            res.status(400).send({message: 'Not Found'})
        }
    }).catch(err => {
        console.log('err: ', err);
    })
}