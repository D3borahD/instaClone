import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public title!: string;
  public  author!:string
  public description!:string;
  public createdDate!: Date;
  public img!: string;
  public like!: number;
  public liked:boolean=false
  public profilPicture!: string


  ngOnInit(): void {
    this.title = 'Chippie';
    this.profilPicture = 'https://cdn.pixabay.com/photo/2021/07/13/11/34/cat-6463284_960_720.jpg'
    this.author = 'inconnue21'
    this.description = 'encore en train de dormir ...';
    this.createdDate = new Date();
    this.img = 'https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_1280.jpg'
    this.like = 6;
  }

  onLike() {
    if(this.liked === false) {
      this.like++
      this.liked = true
    } else {
      this.like--
      this.liked = false
    }
  }
}
