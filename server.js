const http = require('http');
const socketio = require('socket.io');
const app = require('./src/app');
const port = process.env.PORT;

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", socket => {
    console.log('new customer');
    socket.on('new-order', (customer, order) => {
        console.log('new order')
        socket.broadcast.emit('handle-new-order', customer, order);
    });
    socket.on('approved', (order) => {
        socket.broadcast.emit(order._id, 'approved');   
    });
    socket.on('rejected', (order) => {
        socket.broadcast.emit(order._id, 'rejected');
    });
    socket.on("disconnect", () => console.log("Client disconnected"));
  });

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});