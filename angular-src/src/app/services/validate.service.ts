import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

valRegister(user){
  if(user.name ==undefined || user.username == undefined || user.address == undefined || user.phone == undefined || user.ssn == undefined || user.password == undefined){
    return false;
  }else{
    return true;
   }
  }
  //https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
}
