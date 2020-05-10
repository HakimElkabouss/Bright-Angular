import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course = {
    titre: 'Formation Complète Sur Angular',
    avis: '4.24639',
    participants: 32,
    prix: 200,
    publicationDate: new Date(2020, 2, 2)
  }

  constructor() {
      
   }

  ngOnInit() {
  }

}
