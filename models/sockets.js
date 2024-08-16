
class Sockets {

    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        //on connection
        this.io.on('connection',(socket)=>{
            //listen message-to-server
            socket.on("message-to-server",(data) => {
                console.log(data)
                this.io.emit('message-to-client',data)
            })

            socket.on("close-chat",({isClose}) => {
                console.log(isClose)
                this.io.emit('close-chat',{isClose:isClose, serverMessage: '[END_CONVERSATION]'})
            })
        });
        
    }

}

module.exports = Sockets;