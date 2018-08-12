import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      orangeFormName: ['', Validators.required],
      orangeFormEmail: ['', [Validators.required, Validators.email]],
      orangeFormPass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
