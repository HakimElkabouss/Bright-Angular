import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getNames(){
    return ['Hakim', 'Walid', 'Othmane'];
  }
  
}
