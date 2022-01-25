export class Books
{
  id : number;
  title : string;
  author : string;
  img : string;
  decription : string;

  constructor(id: number, title: string, author: string, img : string, decription : string)
  {
    this.id = id;
    this.title = title;
    this.author = author;
    this.img = img;
    this.decription = decription;
  }

}