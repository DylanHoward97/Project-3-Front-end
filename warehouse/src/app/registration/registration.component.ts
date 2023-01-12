import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Registration } from './registration';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrations!: Registration[];
  updateUser?:Registration;

  constructor(private sharedServices: SharedService){}

  ngOnInit(): void {
      
  }

  onGetUser(): void{
    this.sharedServices.getUser().subscribe({
      next: (response: Registration[]) => {this.registrations = response;},
      error: (error: HttpErrorResponse) => {alert(error.message)},
      complete: () => console.log('Get transaction complete')
    })
  }

  onAddUser(addForm:NgForm):void{
    
  }

}
