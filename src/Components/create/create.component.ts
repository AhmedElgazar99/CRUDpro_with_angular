import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  form!:FormGroup;

  constructor( private postService:PostService,private router:Router){}
  
  ngOnInit(): void {
    this.form=new FormGroup({
      title:new FormControl('',Validators.required),
      body:new FormControl('',Validators.required)
    })
    
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.postService.create(this.form.value).subscribe(res=>
    {
      console.log("created successfully");
      this.router.navigateByUrl('/post/index')
    }
    )
  }

}
