import express from 'express';

// import controllers from module - add new controllers to module
import { TestController, WelcomeController } from './controllers/controllers.module';

// Create a new express application instance
const app: express.Application = express();

// The port the express server listens
const port: number = !!process.env.PORT ? +process.env.PORT : 3000;

// setup route handling
app.use('/', new WelcomeController().router);
app.use('/test', new TestController().router);

// Serve the application
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});