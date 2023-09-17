import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../models/post.model";
import {PostsService} from "../../services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: PostModel;

  public liked:boolean=false
  public saved:boolean=false


  constructor(private postService: PostsService,  private router: Router)  {}

  ngOnInit(): void {
  }

  onLike() {
    if(this.liked === false) {
      this.postService.likePostById(this.post.id, 'like')
      this.liked = true
    } else {
      this.postService.likePostById(this.post.id, 'unlike')
      this.liked = false
    }
  }
  save() {
    this.saved ? this.saved=false : this.saved=true
  }
  onViewPost() {
    // on utilise les backticks `
    this.router.navigateByUrl(`posts/${this.post.id}`)
  }
}
