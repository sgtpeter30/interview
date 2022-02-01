export interface Book
{
  id : number | null;
  title : string | undefined;
  author : string | undefined;
  img : string | undefined;
  decription : string | undefined;

  // constructor(id: number, title: string, author: string, img : string, decription : string)
  // {
  //   this.id = id;
  //   this.title = title;
  //   this.author = author;
  //   this.img = img;
  //   this.decription = decription;
  // }

}