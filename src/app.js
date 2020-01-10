const express = require('express');
const path = require('path');
const adminRouter = require('./routers/admin');
const categoryRouter = require('./routers/category');
const userRouter = require('./routers/user');
const cors = require('./middleware/cors');

const publicPath = path.join(__dirname, '..', 'client', 'build');



require('./db/db');

const app = express();

app.use(express.json());
app.use(express.static(publicPath));
app.use(cors);

app.use('/api/admin', adminRouter);
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = app;

