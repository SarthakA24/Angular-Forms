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

  welcomeDisplay: boolean = false;

  submitDetails() {
    this.welcomeDisplay = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
