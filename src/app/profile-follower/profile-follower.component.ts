import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {

  id:number;
  username:string;
  page:number;
  type:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Pour afficher ces paramètres en URL ('/id/username')
    this.id = +this.route.snapshot.paramMap.get('id')
    this.username = this.route.snapshot.paramMap.get('username')


    // Pour récupérer les paramètres dans l'URL
    this.page = +this.route.snapshot.queryParamMap.get('page')
    this.type = this.route.snapshot.queryParamMap.get('type')

  }

}
