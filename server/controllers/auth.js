const passport = require('passport')
const mongoose = require('mongoose')
const { restart } = require('nodemon')
const user = mongoose.model('User')

const response = require('../components/response')

// let sendJSONresponse = (res, status, content) => {
//     res.status(status)
//     res.json(content)
// }

module.exports.register = (req, res) => {
    if (!req.body.email || !req.body.password) {
        response.json(res, 400, {
            "message": "Empty fields"
        })
        return
    }
    let user = new User()
    user.email = req.body.email
    user.setPassword(req.body.password)
    user.save((err) => {
        if (err) {
            response.json(res, 404, err)
        } else {
            let token = user.generateJwt()
            response.json(res, 200, {
                "token": token
            })
        }
    })
}

module.exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        response.json(res, 400, {
            "message": "Empty fields"
        })        
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            response.json(res, 404, err)
            return  
        }
        if (user) {
            let token = user.generateJwt()
            response.json(res, 200, {
                "token": token
            })
        } else {
            response.json(res, 404, info)
        }
    })(req, res)
}