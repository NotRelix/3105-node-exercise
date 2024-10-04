const jwt = require('jsonwebtoken');

// Making sure user is authorized to see personal information
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.send(401).json({message: 'No token provided'});
    }

    jwt.verify(token, 'secrettoken', (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Unauthorized'});
        }
        req.user = decoded;
        next();
    });
};

module.exports = authMiddleware;