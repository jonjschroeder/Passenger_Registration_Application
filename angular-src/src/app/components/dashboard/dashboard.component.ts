import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = []
  constructor(private _service: AuthService) { }

  ngOnInit() {
    this._service.all_users()
      .then(data => {
        this.users = data 
        console.log(this._service)
      })
  }
}
