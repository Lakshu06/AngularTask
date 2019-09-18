import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() data;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    // console.log(this.data);
    this.userForm = this.fb.group({
      name1: [''],
      mail: [''],
      contact2: [''],
      address: [''],
      post: [''],
      experience: [""],

    });


  }

  ngOnChanges(changes:any){
    this.data = changes.data.currentValue;
  }
  onSubmit() {

    // let x = this.userForm.value;
    // console.log(x);
    this.data.push(this.userForm.value);

    alert("Added");
  }


}

