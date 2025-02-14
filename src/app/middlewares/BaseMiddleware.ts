import { SchemaFilterQuery } from "../validations/schemaQueryFilter"
import {Response,NextFunction,Request} from 'express'
import { SafeError } from "../error/CollaboratorError"
export class BaseMiddleware{
    private static SchemaFilterQuery:SchemaFilterQuery = new SchemaFilterQuery()
    static async queryRefiner( request: Request,
        response: Response,
        next: NextFunction){
          try{
            const {error} = await this.SchemaFilterQuery.validate(request.query) 
            if(error){
              throw new SafeError(error.message)
    
            }
            next()
          }catch(error){
            next(error)
          }
        }
}