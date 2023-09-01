import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostModel} from "../../models/post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts!: PostModel[];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.posts = this.postsService.getAllPosts()
  }

}
