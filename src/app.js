const express = require('express');
const path = require('path');
const adminRouter = require('./routers/admin');
const categoryRouter = require('./routers/category');
const itemRouter = require('./routers/item');
const menuRouter = require('./routers/menu');
const userRouter = require('./routers/user');
const orderRouter = require('./routers/order');
const cors = require('./middleware/cors');
const publicPath = path.join(__dirname, '..', 'client', 'build');
const customerPublicPath = path.join(__dirname, '..', 'customerClient', 'build');


require('./db/db');

const app = express();

app.use(express.json());
app.use(express.static(publicPath));
app.use(express.static(customerPublicPath));
app.use(cors);

app.use('/api/admin', adminRouter);
app.use('/api/category', categoryRouter);
app.use('/api/item', itemRouter);
app.use('/api/menu', menuRouter);
app.use('/api/user', userRouter);
app.use('/api/order', orderRouter);

app.use('/admin', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.use('*', (req, res) => {
    res.sendFile(path.join(customerPublicPath, 'index.html'));
});



module.exports = app;