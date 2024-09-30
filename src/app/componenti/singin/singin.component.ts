import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, NgForm, } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.authService.singIn(email, password).subscribe((data: any) => {
      console.log(data)
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      this.authService.createUser(data.email, data.localid, data.idToken, expirationDate)
      console.log(this.authService.user),
      localStorage.setItem('user', JSON.stringify(this.authService.user))
    })
    form.reset()
  }

}


