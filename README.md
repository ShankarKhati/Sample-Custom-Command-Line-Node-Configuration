# Sample-Custom-Command-Line-Node-Configuration
As we all knows while we are creating a new project in Angular 7-8 we already have a command line tool by which we could generate our components/ services/ css/ scss and routing as well, But while we are trying to create an Node project were we need to make a standard for creating controller. At that time we need to create style guides for the same but If we could create our own custom command line tool for generating controller/services and so as we have in Angular CLI it would be great helpful for all developers with in the team.

So here I have added a simple command line tools with custom JS script,  the same we could write in python script, bash script or any scripting language.

# Note: here we are using TypeScript for Node Express framework
Here is some example how to generate a controller class.

## Awesome Commands
- # yarn gen user
	-  It Would generate 2 classes one for service and another for controller class.
	-  Will do all reaquired Imports and configuration related to newly generated User controller.
		 - In My case the newly generated file names are: User.Controller.ts, User.Service.ts
		 
		 ## User.Controller.ts
		 
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
			
		## User.Service.ts
		
		  ```import { Inject, Injectable } from 'injection-js';
			// base service import
			import { BaseService } from '../base.service';


			@Injectable()
			export class UserService extends BaseService {
			}
			
			

> Hope you got my implentation, It it Just a POC. hence proved node has also command line tool.

### I would realy appricate if anyone suggest me any changes, Thanks
