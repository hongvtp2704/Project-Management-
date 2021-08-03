import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  formGroup: FormGroup;
  userName;
  tasks;
  idProject;
  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=> {this.idProject = params['idProject']});  
    this.userName = this.authService.userName;
    this.getTasks();
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      status: new FormControl('', [Validators.required]),
      creator: new FormControl(this.userName, [Validators.required]),
      inProject: new FormControl(this.idProject, [Validators.required]),
    });
  }
  set id(value){
    this.formGroup.get('id').setValue(value);
  }
  set title(value){
    this.formGroup.get('title').setValue(value);
  }
  set description(value){
    this.formGroup.get('description').setValue(value);
  }
  set status(value){
    this.formGroup.get('status').setValue(value);
  }
  getTasks(){
     this.taskService.getTaskByProject(this.idProject).subscribe(data=> this.tasks = data
    )
  }
  createTask(){    
    this.taskService.postTask(this.formGroup.value).subscribe(data => console.log(data));
    alert("Create Post Successfully!");
    this.getTasks()
  }
  editTask(id){
    this.taskService.getTask(id).subscribe(data=>{
      this.id = data._id,
      this.title =data.title,
      this.description = data.description,
      this.status = data.status
    })
  }
  updateTask(){
    let id = this.formGroup.get('id').value;
    let data = this.formGroup.value;
    this.taskService.putTask(id, data).subscribe()
    alert("Update successfully")
    this.getTasks()
  }
  deleteTask(id){
    this.taskService.deleteTask(id).subscribe();
    alert("Delete successfully");
    this.getTasks()
  }
  resetForm() {
    this.formGroup.reset();
  }
}
