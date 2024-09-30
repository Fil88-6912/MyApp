import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NewUser, ServizioProvaService } from '../../servizi/servizio-prova.service';
import {MatCardModule} from '@angular/material/card';
import { FirebaseService, User } from '../../servizi/firebase.service';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { Observable, of, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit{
  //@Input() data: any;
  //id: any
  persona: any
  userId: string = ""
  //user$: Observable<any | null> = of(null);
  cardOpenedSub: Subscription;
 
  constructor(private route: ActivatedRoute, private firebase: FirebaseService, private router: Router) {
    this.cardOpenedSub = this.firebase.cardOpened.subscribe(elem => {
      console.log(elem)
      this.getPersonaData(elem)
    });
  }

  ngOnInit(): void{
    /*var id = +this.route.snapshot.paramMap.get('id')!
    console.log(`ID mappato: ${id}`)
    this.route.paramMap.subscribe((params: ParamMap)=>{
      id = +params.get('id')!
      console.log(`ID mappato 2: ${id}`)
    })*/
    
    /*this.contatto = this.servizioProva.getPersona()
    if(this.route.snapshot.paramMap.get('id')){
      this.contatto = this.servizioProva.getPersonaIndex(this.id)
    }*/ 
    
  }

  onDeletePersona(id: string){
    this.firebase.userDeleted.next(id)
    //this.servizioProva.deleteUser(id)
    this.onCloseCard()
  }

  onCloseCard(){
    this.router.navigate(['/contact'])
  }

  getPersonaData(id: string){
    this.firebase.getPersona(id)
    .subscribe((data: any) => {
      console.log(data)
      this.persona = data
      console.log(this.persona)
    })
    this.userId = id
  }
}
