import express from 'express';
// import controllers from module - add new controllers to module
import { TestController, WelcomeController } from './controllers/controllers.module';

export class Application {
    
    // Create a new express application instance
    express: express.Application = express();
    
    // The port the express server listens
    port: number = !!process.env.PORT ? +process.env.PORT : 3000;

    constructor() {

        // setup route handling
        this.express.use('/', new WelcomeController().router);
        this.express.use('/test', new TestController().router);
    }
    
    run() {
        
        // Serve the application
       this.express.listen(this.port, () => {
            // Success callback
            console.log(`Listening at http://localhost:${this.port}/`);
        });
    }
}

const app: Application = new Application();
app.run();
