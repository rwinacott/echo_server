import {Router, Request, Response, NextFunction} from 'express';

// Simple JSON database of Hero's 
//const Heroes = require('../data');

export class EchoRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * This is a Noop call for any GET/DEL or other REST methods that
   * have no mening for this call. The RESTful interface of the 
   * Matching Server Mapper must pass a large JSON document to the 
   * downstream system so POST is the only method supported.  
   * 
   * This call will only respond with a 501 Not Implemented error.
   * 
   * @param {Request} req 
   * @param {Response} res 
   * @param {NextFunction} next 
   * 
   * @memberof EchoRouter
   */
  public echoNoOp(req: Request, res: Response, next: NextFunction) {
    res.status(501).send();
  }

  /**
   * POST All data passed to the call echoed back.
   */
  public echoAll(req: Request, res: Response, next: NextFunction) {
    let theRequestData = req.body;
    res.send({
      request: theRequestData,
      results: {
        DataItem1: true,
        DataItem2: false,
        DataArray: [
          'Value0',
          'Value1',
          'Value2',
          'Value3'
        ],
        DataDictionary: {
          name1: 'value1',
          name2: 'value2',
          name3: 'value3'
        }
      }
    });
  }

  /**
   * GET fail with error code. Calling this API will cause a failure 
   * error code to be returned to the calling client. This should be
   * used to simulate a downstream system failing.
   */
  public echoFail(req: Request, res: Response, next: NextFunction) {
    let error = parseInt(req.params.error);
    res.status(error).send({
      message: 'Echo Failed with supplied code',
      status: error
    });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    // Setup the Noop calls for unsupported REST methods
    this.router.get('/', this.echoNoOp);
    this.router.delete('/', this.echoNoOp);
    this.router.copy('/', this.echoNoOp);
    this.router.put('/', this.echoNoOp);
    // Setup the supported calls.
    this.router.post('/', this.echoAll);
    this.router.get('/:error', this.echoFail);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const echoRoutes = new EchoRouter();
echoRoutes.init();

export default echoRoutes.router;
