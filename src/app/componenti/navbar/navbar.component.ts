import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private authService: AuthService) {}

  onLogOut(){
    this.authService.logOut()
  }

}
