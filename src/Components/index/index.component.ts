import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from '../../service/post.service';
import { Post } from '../../Model/post';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit {
  
  posts:Post[]=[];
  constructor(private postService:PostService){}

  ngOnInit(): void {

    this.postService.getAll().subscribe((data:Post[])=>
    {
      this.posts=data;
      console.log(this.posts);
    }
    )
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe(res=>
    this.posts=this.posts.filter(item=>item.id !==id));
    console.log("deleted succesfully",this.posts);
  }
  

}
