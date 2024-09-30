import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContattoComponent } from '../contatto/contatto.component';
import { FirebaseService } from '../../servizi/firebase.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule, ContattoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  persona: any
  id = '-O26rm4a-sw3cbk0_MQB'

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.firebase.getPersona(this.id)
    .subscribe((data: any) => {
      console.log(data)
      this.persona = data
     })
  }
}
