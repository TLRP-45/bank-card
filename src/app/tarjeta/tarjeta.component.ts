import { Component, OnInit, inject } from '@angular/core';
import { Tarjeta } from '../models/tarjeta';
import { TarjetaService } from '../services/tarjeta.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {


  private serviceTarjetas = inject(TarjetaService);
  
  constructor() { }

  ngOnInit() {
  }

  tarjetas : Tarjeta[] = this.serviceTarjetas.getCards();

}
