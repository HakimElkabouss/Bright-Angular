import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers:any = []

  constructor(private githubFollowersService: GithubFollowersService) { }

  ngOnInit() {
    this.getFollowers()
  }

  getFollowers(){
    this.githubFollowersService.getAll()
    .subscribe(followers => this.followers = followers, 
      error =>{
      alert('Erreur inattendue !')
    })
}

}
