import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  Ajouter(){
    this.route.navigate(['followers', 12, 'HakimElkabouss'], {
      queryParams : {page: 10, type: 'admin'}
    })
  }
}
