export class PostModel {
  constructor(
    public title:string,
    public profilPicture:string,
    public author:string,
    public description:string,
    public createdDate:Date,
    public img:string,
    public like:number
  ) {
  }
}
