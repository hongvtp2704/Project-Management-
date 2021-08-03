import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  formGroup: FormGroup;
  projects = [];
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllProject();
  }
  initForm() {
    this.formGroup = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      status: new FormControl('', Validators.required),
      dateOfStart: new FormControl('', Validators.required),
    });
  }
  set id(value) {
    this.formGroup.get('id').setValue(value);
  }
  set name(value) {
    this.formGroup.get('name').setValue(value);
  }
  set description(value) {
    this.formGroup.get('description').setValue(value);
  }
  set status(value) {
    this.formGroup.get('status').setValue(value);
  }
  set dateOfStart(value) {
    this.formGroup.get('dateOfStart').setValue(value);
  }

  addProject() {
    this.projectService
      .post(this.formGroup.value)
      .subscribe((result) => console.log(result));
    alert('Add Project Successfully');
    this.getAllProject();
  }
  getAllProject() {
    return this.projectService
      .getAll()
      .subscribe((result) => (this.projects = result));
  }
  getProjectById(id) {
    this.projectService.getById(id).subscribe((project) => {
      (this.dateOfStart = project.dateOfStart),
        (this.id = project._id),
        (this.name = project.name),
        (this.description = project.description),
        (this.status = project.status);
    });
  }
  updateProject() {
    let id = this.formGroup.get('id').value;
    let data = {
      name: this.formGroup.get('name').value,
      description: this.formGroup.get('description').value,
      status: this.formGroup.get('status').value,
      dateOfStart: this.formGroup.get('dateOfStart').value,
    };
    this.projectService.put(id, data).subscribe();
    alert('Update successfully');
    this.getAllProject();
  }
  deleteProject(id) {
    this.projectService.delete(id).subscribe();
    alert('Delete successfully!');
    this.getAllProject();
  }
  resetForm() {
    this.formGroup.reset();
  }
  navigateToTask(id){
    this.router.navigate(['/task'],{queryParams: {idProject : id}})
  }
}
