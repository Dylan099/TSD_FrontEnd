import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Subscrition } from '../subscrition';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscrition = new Subscrition();
  msg = '';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  subDoctor(){
    this._service.subscriptionFromRemote(this.subscrition).subscribe(
      data => {
        console.log("response recieved");
        this._router.navigate(['/loginsuccess'])
      },
      error =>{
         console.log("exception ocurred");
         this.msg = error.error;
        }
    )
  }
}
