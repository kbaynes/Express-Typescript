import { Router, Response, Request } from 'express'
import { RouterFactory } from '../utils/router.factory';

export class WelcomeController {

    public router: Router;

    constructor() {

        // the factory saves tedious repitition of router setups
        this.router = RouterFactory.buildExtendedRouter()

        this.router.get('/', (req: Request, res: Response) => {
            // extract the name from the request parameters
            let { name } = req.params;

            // return the given name
            res.send(`<h1>Welcome to the Express & TypeScript starter!</h1><p><a href="./test/FooBar">Test Param</a></p>`);
        });

    }

}
