import {Router} from 'express'
import { School } from '../controllers/School.js'
import { SchoolMiddleWare } from '../middlewares/SchoolMiddleware.js'

export const schoolRouter = Router()
const SchoolController = new School()
const schoolMiddleWare = new SchoolMiddleWare()

schoolRouter.get('/', SchoolController.getAllSchool)
schoolRouter.get('/:id', schoolMiddleWare.getUniqueSchool, SchoolController.getUniqueSchool)
schoolRouter.post('/create', SchoolController.createSchool)

