const jwt = require('jsonwebtoken');

// Making sure user is authorized to see personal information
const authMiddleware = (req, res, next) => {
    // default is 'Bearer [token]' so we need to split it without the 'Bearer'
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.send(401).json({message: 'No token provided'});
    }

    // console.log(token);

    jwt.verify(token, 'secrettoken', (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Unauthorized'});
        }
        req.user = decoded;
        next();
    });
};

module.exports = authMiddleware;