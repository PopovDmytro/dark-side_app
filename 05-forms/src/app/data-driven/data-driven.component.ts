import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import {reject} from "q";
import {resolveSoa} from "dns";

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

  constructor(private fb: FormBuilder) {

    this.myForm = fb.group({
      'userData': fb.group({
        'username': ['Max', [Validators.required, this.exampleValidator]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': fb.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    });

    // this.myForm.valueChanges.subscribe(
      // (data: any) => console.log(data)
    // );

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if ( control.value === 'Example'){
            resolve({'invalid': true})
          } else {
            resolve(null);
          }
        }, 1500)
      }
    );

    return promise;
  }
}

