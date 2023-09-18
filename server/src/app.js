const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const { Server } = require("socket.io");
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET,POST"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    },
});



// Rutas


const showsRoutes = require('./routes/shows.routes');
const moviesRoutes = require('./routes/movies.routes');
const usersRoutes = require('./routes/users.routes');


// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Configuración de conexión a MongoDB
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);
mongoose.set("strictQuery", false);

// Maneja la conexión de Socket.io
io.on("connection", (socket) => {
    console.log("Cliente conectado");

    // Maneja la solicitud de cambio de colección
    socket.on("startCollectionListener", () => {
        // Establece el cambio de flujo (change stream) en la colección
        const collectionUsers = client.db("Bites").collection("users");
        const changeStreamUsers = collectionUsers.watch();

        // Escucha los eventos de cambio en el flujo y los emite a través del socket
        changeStreamUsers.on("change", (change) => {
            socket.emit("collectionUsersChange", change);
        });


    });

    // Maneja la desconexión del cliente
    socket.on("disconnect", () => {
        console.log("Cliente desconectado");
    });
});


// Uso de rutas


app.use("/users", usersRoutes);
app.use("/shows", showsRoutes);
app.use("/movies", moviesRoutes);



// Inicia el servidor
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Conectado a la base de datos");

        httpServer.listen(process.env.PORT, () => {
            console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`);
        });

        io.listen(process.env.SOCKET_IO_PORT, () => {
            console.log(
                `Servidor de Socket.io en ejecución en el puerto ${process.env.SOCKET_IO_PORT}`
            );
        });

    } catch (err) {
        console.error("Error de conexión");
    }
};

startServer();

