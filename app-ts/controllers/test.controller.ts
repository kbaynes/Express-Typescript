import { Router, Response, Request } from 'express'
import { RouterFactory } from '../utils/router.factory';

export class TestController {

    public router: Router;

    constructor() {

        // the factory saves tedious repitition of router setups
        this.router = RouterFactory.buildExtendedRouter()

        this.router.get('/:name', (req: Request, res: Response) => {
            // extract the name from the request parameters
            let { name } = req.params;

            // return the given name
            res.send(`Test Param =  ${name}`);
        });

    }

}
