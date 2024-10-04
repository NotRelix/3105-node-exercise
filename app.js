const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const loggingMiddleware = require('./middleware/loggerMiddleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use(loggingMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})