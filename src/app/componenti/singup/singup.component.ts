import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-singup',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent implements OnInit{

  constructor(private authService: AuthService) {}

  ngOnInit(): void{}

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.singUp(email, password).subscribe(data => {
      console.log(data);
    })
    form.reset()
  }
  
}
