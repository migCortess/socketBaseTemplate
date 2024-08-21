
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

            socket.on("typing",(userTyping) => {
                console.log(userTyping)
                this.io.emit('typing', userTyping)
            })

            socket.on("ranking",(ranking) => {
                console.log(ranking)
                this.io.emit('ranking', ranking)
            })
        });
        
    }

}

module.exports = Sockets;