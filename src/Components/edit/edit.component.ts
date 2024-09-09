import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../Model/post';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

id!:number;
form!:FormGroup;
post!:Post;

  constructor(private postService:PostService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['postid'];
    this.postService.find(this.id).subscribe((res:Post)=>
    {
      this.post=res;
    } )

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
  this.postService.update(this.id,this.form.value).subscribe(res=>
  {
    console.log("updated successfully");
    this.router.navigateByUrl('post/index');
  }
  )
}
}
