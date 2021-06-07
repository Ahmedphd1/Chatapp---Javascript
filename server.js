const io = require('socket.io')(3000, options={ // require socket.io module
        cors:true
});

io.on('connection', socket => { // event handler on "connection"
    socket.on('message', message => { // even handler on "message" sent
        socket.broadcast.emit('message', message) // broadcast the message so that everybody can see it except the sender
    })
});