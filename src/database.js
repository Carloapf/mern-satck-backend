const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb://127.0.0.1:27017/datasetest';

mongoose.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
    console.log('Conectado a MongoDB');
})
.catch((error) => {
    console.error(error);
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('La base de datos está conectada');
    
    // Aquí es donde puedes hacer tus consultas
    // después de que se haya establecido la conexión
   
});

//mongoose.set('useCreateIndex', false);
//mongoose.set('createIndexes', true);

/*const connectDataBase = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${connection.connection.host}:${connection.connection.port}`;

        console.log(`MongoDB conectado en ${url}`);
    }catch (error){
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
}*/