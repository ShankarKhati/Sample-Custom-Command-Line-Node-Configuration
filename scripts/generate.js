const fs = require('fs')

let componentName = '';
if (process.argv.length > 3) {
  console.log("We can generate only one component at a time");
} else if (process.argv.slice(2)) {
  componentName = process.argv.slice(2)[0];
} else {
  console.log("NOT Working")
}
// Data which will write in controller file. 
let controllerData = "// base class import\nimport { prefixRoute, BaseController } from '../base.controller';\n"
  + "import { Controller, Get, Post, Put, RouteEvent } from '@alterior/core';\n"
  + "\n\n //service import\n"
  + "import { " + componentName + "Service } from '../../service/"+componentName.toLowerCase()+"/"+componentName.toLowerCase()+".service';\n\n"
  + "\n\n@Controller(prefixRoute('/" + componentName.toLowerCase() + "'))\n"
  + "export class " + componentName + "Controller extends BaseController {\n"
  + "\n\n // constructor\n"
  + "constructor(protected _service: "+componentName+"Service) {"
  + "\n  super(_service)\n} \n\n}";


// Write data in 'Output.txt';
var dir = './src/controller/' + componentName.toLowerCase();
fs.mkdir(dir, function (err) {
  if (err) {
    if (err.code == 'EEXIST') {
      console.log("already Exist")  // ignore the error if the folder already exists
      return;
    }
    else console.log(err); // something else went wrong
  } else {
    console.log("controller folder sucessfully created");
    fs.writeFile('./src/controller/' + componentName.toLowerCase() + '/' + componentName + '.Controller.ts', controllerData, (err) => {
      // In case of a error throw err. 
      if (err) console.log(err);
      else console.log(componentName.toLowerCase() + " controller generated sucessfully.")
    })
  }
});


// Data which will write in a Service file. 
let serviceData = "import { Inject, Injectable } from 'injection-js';\n"
  + "// base service import\nimport { BaseService } from '../base.service';\n"
  + "\n\n@Injectable()\n"
  + "export class " + componentName + "Service extends BaseService {\n}";

// Write data in 'Output.txt';
var dir = './src/service/' + componentName.toLowerCase();
fs.mkdir(dir, function (err) {
  if (err) {
    if (err.code == 'EEXIST') {
      console.log("already Exist")  // ignore the error if the folder already exists
      return;
    }
    else console.log(err); // something else went wrong
  } else {
    console.log("service folder sucessfully created");
    fs.writeFile('./src/service/' + componentName.toLowerCase() + '/' + componentName + '.Service.ts', serviceData, (err) => {
      // In case of a error throw err. 
      if (err) console.log(err);
      else console.log(componentName.toLowerCase() + " service generated sucessfully.")
    })
  }
});
