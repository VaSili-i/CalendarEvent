const { Users } = require('../modul');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function sign(id, name) {
    let payload = {
        id,
        name
    }
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
}

class UserController {
    async registration(req, res) {
        try {
            let { name, password } = req.body;
            if (name === '' || password === '') {
                return res.status(401).send('something print')
            }
            let checkUser = await Users.findOne({ name });
            if (checkUser) {
                return res.status(403).send('name is used');
            }
            const hashPassword = bcrypt.hashSync(password, 3);
            let user = new Users({ name, password: hashPassword });
            user.save()
            const token = sign(user._id, user.name);
            return res.send(token)
        } catch (e) {
            console.log(e)
        }
    }
    async login(req, res) {
        try {
            let { name, password } = req.body;
            let user = await Users.findOne({ name });

            if (!user) {
                return res.status(403).send('user is dont found');
            }
            const checkPassword = bcrypt.compareSync(password, user.password);
            if (!checkPassword) {
                return res.status(403).send('password is wrong');
            }
            const token = sign(user._id, user.name);
            return res.send(token)
        } catch (e) {
            console.log(e)
        }
    }
    async check(req, res) {
        try {
            let user = req.user;
            if (!user) {
                return res.status(403).send('user is dont found');
            }
            const token = sign(user._id, user.name);
            return res.send(token)
        } catch (e) {
            console.log(e)
        }
    }
    async getAllUser(req, res) {
        try {
            let users = await Users.find({});
            let userName = users.map(user => user.name)
            console.log(userName)
            res.send(userName)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController()