import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    
   }
  

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      email: [null, [ Validators.email, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      area: [null, [Validators.required]],
    })
  }
  toggle:boolean = false;

  openMenu(){
    this.toggle =! this.toggle
  }
  get email() {
    return this.loginForm.get('email');
  }
  get area() {
    return this.loginForm.get('area');
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
        form.reset()
      }
    }
  }
  


