const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    hash: {
        type: String,
    },
    salt: {
        type: String,
    }
})
userSchema.methods.setPassword = (password) => {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex')
}
userSchema.methods.isValidPassword = (password) => {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex')
    return this.hash === hash
}
userSchema.methods.generateJwt = () => {
    let exp = new Date()
    exp.setDate(exp.getDate() + 7)
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(exp.getTime() / 1000)
    }, process.env.JWT_SECRET)
}

const User = mongoose.model("User", userSchema);