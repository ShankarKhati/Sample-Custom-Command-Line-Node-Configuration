// base class import
import { prefixRoute, BaseController } from '../base.controller';
import { Controller, Get, Post, Put, RouteEvent } from '@alterior/core';


 //service import
import { UserService } from '../../service/user/user.service';



@Controller(prefixRoute('/user'))
export class UserController extends BaseController {


 // constructor
constructor(protected _service: UserService) {
super();
console.log("I'm Here in User controller")
}

@Get('/man')
public getman(){
console.log("hi man")
}

}