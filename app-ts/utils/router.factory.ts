import { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';



export class RouterFactory {

    public static buildBaseRouter(): Router {
        const router: Router = Router();
        return router;
    }

    public static buildExtendedRouter(): Router {
        const router: Router = Router();
        router.use(compression());
        router.use(cors());
        router.use(bodyParser.json());
        router.use(bodyParser.urlencoded({ extended: true }));
        return router;
    }

}