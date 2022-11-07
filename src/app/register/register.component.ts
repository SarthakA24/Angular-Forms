import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName!: string;
  passWord!: string;
  phone!:number;

  isSubmitted: boolean = false;

  submitDetails() {
    this.isSubmitted = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
