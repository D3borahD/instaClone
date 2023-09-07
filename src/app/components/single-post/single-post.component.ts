import {Component, Input, OnInit} from '@angular/core';

import {PostsService} from "../../services/posts.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {PostModel} from "../../models/post.model";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  public post!: PostModel;
  public liked:boolean=false
  public saved:boolean=false

  constructor(private postService: PostsService,
              private route: ActivatedRoute,
              private router: Router){}


  ngOnInit(): void {
    // les paramètres d'une route sont de type string.
    // '+' est un type cast qui transforme une string en number
    const postId = +this.route.snapshot.params['id']
    this.post = this.postService.getPostById(postId)
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


  onBack() {
    this.router.navigateByUrl(`/posts`)
  }
}
