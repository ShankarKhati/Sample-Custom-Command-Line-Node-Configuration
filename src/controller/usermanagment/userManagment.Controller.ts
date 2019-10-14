// base class import
import { prefixRoute, BaseController } from '../base.controller';
import { Controller, Get, Post, Put, RouteEvent } from '@alterior/core';


 //service import
import { userManagmentService } from '../../service/usermanagment/usermanagment.service';



@Controller(prefixRoute('/usermanagment'))
export class userManagmentController extends BaseController {


 // constructor
constructor(protected _service: userManagmentService) {
  super();
} 

}