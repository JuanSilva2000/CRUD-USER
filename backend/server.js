import express from 'express';
import cors from 'cors';
import sincronizacion from './src/database/sincronizacion.js';;
import userRouter from './src/routes/user.routes.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173', credentials: true})); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

sincronizacion();

app.use('/api',userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});