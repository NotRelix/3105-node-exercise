const rateLimit = require('express-rate-limit');

// Limits 5 requests for every 30 seconds
const limiter = rateLimit({
    WindowMs: 30 * 1000,
    max: 5,
    message: 'Too many requests, please try again after 30 seconds',
});

module.exports = limiter;