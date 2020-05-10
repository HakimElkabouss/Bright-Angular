import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppError } from '../common/app-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url:string,private http: HttpClient) { }

  // Récupérer les posts
  getAll(){
    return this.http.get(this.url)
               .catch(this.handleError)
  }

  // Créer les posts
  create(resource){
    return this.http.post(this.url, resource)
               .map(response => response)
               .catch(this.handleError)
  }

  // Modifier les posts
  update(resource){
    return this.http.put(this.url+'/'+resource.id, resource)
               .map(response => response)
               .catch(this.handleError)
  }

  // Supprimer les posts
  delete(resource){
    return this.http.delete(this.url+'/'+resource.id)
               .map(response => response)
               .catch(this.handleError)
  }

  private handleError(error:Response){
    if(error.status === 404){
      return Observable.throw(new NotFoundError);
     }

     if(error.status === 400){
      return Observable.throw(new BadInput);
     }

    return Observable.throw(new AppError);
  }
}
