import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { rutasUsuarios } from './routes/usuarios.route';
import { Database } from './utils/database'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const database:Database= new Database(); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/usuarios', rutasUsuarios)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
