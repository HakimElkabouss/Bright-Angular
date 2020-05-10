import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:any = [];

  status = true

  post = {
    id: 0,
    title: '',
    body: '',
    userId: ''
  }
 
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
      this.postService.getAll()
      .subscribe(posts => this.posts = posts, 
        error =>{
        alert('Erreur inattendue !')
      })
  }

  createPost(){
        this.postService.create(this.post)
        .subscribe(newPost =>{
          this.posts.unshift(newPost)
        }, error =>{
          if(error.status === 404){
            alert('Merci de vérifier vos informations !!')
          }else {
            alert('Erreur inattendue !')
          }
        })
  }

  editPost(post){
    this.post = post;
    this.status = false
  }

  updatePost(){
        this.postService.update(this.post)
        .subscribe(() =>{
          this.post = {
            id: 0,
            title: '',
            body: '',
            userId: ''
          }
          this.status = true
        }, error =>{
          alert('Erreur inattendue !')
        })
  }

  deletePost(post){
      this.postService.delete(this.post)
      .subscribe(() =>{
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1);
      }, error =>{
        if(error.status === 404){
          alert('Ce poste est dèjà supprimé !!')
        }else {
          alert('Erreur inattendue !')
        }
        
      })

  }
}
