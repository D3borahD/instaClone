import {Component, OnInit} from '@angular/core';
import {PostModel} from "./models/post.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'instaclone';
  public posts!:PostModel[]



  ngOnInit(){
  this.posts = [
    {
      id:0,
      title: 'mon titre',
      profilPicture: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg',
      author: 'Chippie',
      description: 'la star',
      createdDate: new Date(),
      img: 'https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_1280.jpg',
      like: 6,
      location: 'Lyon'
    },
    {
      id:1,
      title: 'ohhh',
      profilPicture:'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg',
      author:'Chippie',
      description:'ohhh',
      createdDate:new Date(),
      img:'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg',
      like: 12,
    },
    {
      id:2,
      title: 'oui ?',
      profilPicture:'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg',
      author:'Chippie',
      description:'oui ? ',
      createdDate:new Date(),
      img:'https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_1280.jpg',
      like:  24,
    },
    {
      id:3,
      title: 'mon titre',
      profilPicture: 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg',
      author: 'Chippie',
      description: 'la star',
      createdDate: new Date(),
      img: 'https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_1280.jpg',
      like: 6,
      location: 'Lyon'
    },
  ]



  }


}
