import app from '../index';
const PORT = 8001;

const server = app.listen(PORT);
server.on("listening",() =>{
    console.log(`Server is running ${PORT}`);
})