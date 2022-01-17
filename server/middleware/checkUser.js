const decode = require('jwt-decode');

module.exports = function checkUser(req, res, next) {
    if (req.method === "OPTIONS") {
        return next()
    }
    let token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return next()
    }
    const user = decode(token);
    req.user = user;
    return next()
}