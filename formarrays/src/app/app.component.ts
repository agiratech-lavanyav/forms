import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  
  title = 'FormArray';
 
  Form: FormGroup;
 
  constructor(private fb:FormBuilder) {
 
    this.Form = this.fb.group({
      name: '',
      age: '',
      address: '',
      skills: this.fb.array([]) ,
    });
  
  }
 
  get skills() : FormArray {
    return this.Form.get("skills") as FormArray
  }
 
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
      prev_org: '',
    })
  }
 
  addSkills() {
    this.skills.push(this.newSkill());
  }
 
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.Form.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
