import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages'; 
// for redirect 
import {Router} from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  address: String;
  phone:String;
  ssn:String;
  password:String;


  constructor(
   private validateService: ValidateService,
   private FlashMessage: FlashMessagesService,
   private authService:AuthService,
   private router: Router
   
   ) { }

  ngOnInit() {
  }
  Register(){
    const user = {
      name: this.name,
      username: this.username,
      address: this.address,
      phone:this.phone,
      ssn:this.ssn,
      password:this.password
    }
    if(!this.validateService.valRegister(user)){
      this.FlashMessage.show('All requested information is required!', {cssClass: 'alert-danger', timeout:3000})
      return false;
    }

    // User Registration
    this.authService.registerUser(user).subscribe(data =>{
      if(data.success){
        this.FlashMessage.show('You are now registered', {cssClass: 'alert-success', timeout:3000})
        this.router.navigate(['/login']);
            }else{
        this.FlashMessage.show('You may have already registered', {cssClass: 'alert-danger', timeout:3000})
        this.router.navigate(['/register']);
      }
    })
  }
}
