import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myForm;/* = new FormGroup({
    'userData': new FormGroup({
      'username': new FormControl('Max', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    }),
    'password': new FormControl('', Validators.required),
    'gender': new FormControl('male'),
    'hobbies': new FormArray([
      new FormControl('Cooking', Validators.required)
    ])
  });*/

  genders: string[] = [
    'male',
    'female'
  ];

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }

  constructor(private fb: FormBuilder) {

    this.myForm = fb.group({
      'userData': fb.group({
        'username': ['Max', Validators.required],
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': fb.array([
        ['Cooking', Validators.required]
      ])
    });

  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

}
