import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ContactMethods = [
    {id:1, name:'email'}, 
    {id:2, name:'telephone'}, 
    {id:3, name:'sms'}
  ]
  ContactMethods2 = [
    {id:1, name:'Phone'}, 
    {id:2, name:'Sms'}, 
  ];
  constructor() { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }
  Submit(f){
    console.log(f.value)
  }
}
