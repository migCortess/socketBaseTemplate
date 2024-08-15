//Server de express
const express  =    require('express');
const http     =    require('http');
const socketio =    require('socket.io');
const path     =    require('path');
const cors     =    require('cors');
const Sockets  =    require('./sockets');

class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;

        //http server
        this.server = http.createServer(this.app);

        //config socket server
        this.io = socketio(this.server, {/*Config server*/})

    }

    midlewares() {
    //desplegar el directorio public    
    this.app.use( express.static(path.resolve(__dirname,'../public')));

    //CORS
    this.app.use(cors());

    }

    socketsConfig(){
        new Sockets(this.io);
    }

    execute() {
        //inicializar midlewares
        this.midlewares();

        //config sockets
        this.socketsConfig();

        serverless(this.server);
        // this.server.listen(this.port, () => {
        //     console.log(`server is running on port: ${this.port}`);
        // });
    }
}

module.exports = Server;