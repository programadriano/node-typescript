import { Router, Request, Response, NextFunction } from 'express';

export class PersonRouter {
    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }


    public get(req: Request, res: Response, next: NextFunction) {
        res.send("Person");
    }

    init() {
        this.router.get('/', this.get);
    }


}

const personRouter = new PersonRouter();
personRouter.init();

export default personRouter.router;
