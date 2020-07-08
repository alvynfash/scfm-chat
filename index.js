const app = require('express')();
const http = require('http').createServer(app);



app.get('/', (request, response) => response.send("Hello world"));


//Socket logic
const socketIo = require('socket.io')(http);

socketIo.on('connection', (userSocket) => {
    userSocket.on("send_message", (data) => {
        userSocket.broadcast.emit("receive_message", data);
    })
});

http.listen(process.env.PORT);