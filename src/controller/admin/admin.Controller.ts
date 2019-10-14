// base class import
import { prefixRoute, BaseController } from '../base.controller';
import { Controller, Get, Post, Put, RouteEvent } from '@alterior/core';


 //service import
import { adminService } from '../../service/admin/admin.service';



@Controller(prefixRoute('/admin'))
export class adminController extends BaseController {


 // constructor
constructor(protected _service: adminService) {
  super(_service)
} 

}