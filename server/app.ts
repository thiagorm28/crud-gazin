import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import routes from './developers/developers.routes.config';


let app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3333;
// Ajudará a debugar o código

// middleware para entender JSON
app.use(express.json());

// middleware para permitir request de origens diferentes
app.use(cors());

// configurando o expressWinston (middleware de registros),
// que vai registrar todos os registros automaticamente recebidos pelo express automaticamente
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // quando não estiver sendo debugado, os registro das requests serão em uma linha
    if (typeof global.it === 'function') {
        loggerOptions.level = 'http'; // silenciando totalmente para testes que não usam debug 
    }
}

// inicializando o registrador com as configurações acima
app.use(expressWinston.logger(loggerOptions));

// adicionando rotas
app.use(routes);

const runningMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
});

export default server.listen(port);