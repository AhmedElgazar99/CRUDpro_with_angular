import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../Model/post';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  id!:number;
  post!:Post;

  constructor(private postService:PostService,private route:ActivatedRoute){}
  ngOnInit(): void {
    
    this.id=this.route.snapshot.params['postid'];
    this.postService.find(this.id).subscribe((res:Post)=>
    {
      this.post=res;
    })
  }

}
