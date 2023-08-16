import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../models/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: PostModel;

  public liked:boolean=false


  ngOnInit(): void {
  }

  onLike() {
    if(this.liked === false) {
      this.post.like++
      this.liked = true
    } else {
      this.post.like--
      this.liked = false
    }
  }
}
