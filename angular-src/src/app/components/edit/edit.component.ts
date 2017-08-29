import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import {ValidateService} from '../../services/validate.service'
import {Router} from '@angular/router'
import {FlashMessagesService} from 'angular2-flash-messages'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  username:string;
  user: any;

  constructor(
   private validateService: ValidateService,
   private FlashMessage: FlashMessagesService,
   private authService:AuthService,
   private router: Router) { 
     this.user = {name:"", username:"", address:"", phone:"", ssn:"",password:""};
   }

  ngOnInit() {
    this.authService.getProfile().subscribe(data=>{
      this.username = data.user.username;
      this.user = data.user;
      this.user.password = '';
      console.log(data);
      //then bind user component to edit profile form 

    })
  }
  // observable has http request - then added a mapping method and changes into json - passes into the callback funtion in the .then method.  
    onEditSubmit(){
      this.authService.edit_user(this.user, this.username)
      .then(responsebody =>{
        console.log(responsebody);
        this.router.navigate(['profile']);
        
      })
  }
}
// this.router.navigate(['/login']);