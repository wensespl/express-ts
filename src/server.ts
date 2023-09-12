import compression from 'compression';
import cors from 'cors';
import express, { type Application } from 'express';
import helmet from 'helmet';

import { corsOptions, serverConfig } from './config';

export default class ExpressApp {
  private readonly app: Application;
  private readonly port: string;

  constructor() {
    this.app = express();
    this.app.disable('x-powered-by');
    this.port = serverConfig.port ?? '3000';

    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(compression());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use(helmet());
    this.app.use(cors(corsOptions));
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
