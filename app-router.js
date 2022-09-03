export default class AppRouter {


    constructor(app) {

        this.app = app;
        this.setupRouter = this.setupRouter.bind(this);
        this.setupRouter();
    }

    setupRouter() {

        const app = this.app;

        console.log("APp ROuter works!");

        /**
         * @endpoint: /api/users
         * @method: POST
         **/
        app.post('/api/login', (req, res, next) => {
            return res.status(200).json({
                token: 123
            });
        });
    }

}
