import routes from './lib/routes.ts';
import { fileURLToPath } from 'url';
import cors from 'cors';
import path from 'node:path';
import express from 'express';

const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// allow react to access this backend...
const corsOptions = {
    origin: ['patrick.cpmgw20i6ovx.us-west-1.rds.amazonaws.com', 'http://patrick.cpmgw20i6ovx.us-west-1.rds.amazonaws.com', 'http://localhost:5173'],
};
app.use(cors(corsOptions));

// enforce json request bodies...
app.use(express.json());

// custom api routes...
app.use('/api', routes);

// static files
const reactPath = path.join(__dirname, 'client/dist');
app.use(express.static(reactPath));

// catch-all route...
app.get('*all', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
