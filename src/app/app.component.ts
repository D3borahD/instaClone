import {Component, OnInit} from '@angular/core';
import {PostModel} from "./models/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'instaclone';
  public post1!:PostModel
  public post2!:PostModel
  public post3!:PostModel

  ngOnInit(){
  this.post1 = new PostModel(
    'mon titre',
    'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg',
    'Chippie',
    'la star',
      new Date(),
    'https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_1280.jpg',
    6,
  )
    this.post2 = new PostModel(
      'ohhh',
      'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg',
      'Chippie',
      'ohhh',
      new Date(),
      'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg',
      12,
    )
    this.post3 = new PostModel(
      'oui ?',
      'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg',
      'Chippie',
      'oui ? ',
      new Date(),
      'https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg',
      24,
    )


  }


}
