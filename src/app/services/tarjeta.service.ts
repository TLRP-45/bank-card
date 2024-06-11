import { Injectable } from '@angular/core';
import { Tarjeta } from '../models/tarjeta'

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
    


  private tarjetas: Tarjeta[] = [
    new Tarjeta (1, "1111 2222 3333 4444",  "Juan Alcachofa Espinosa", 123, '03/25'),
    new Tarjeta (2, "4444 3333 2222 1111",  "Isabelle Shizue Hisho", 456, '04/29'),
    new Tarjeta (3, "1234 5678 9012 3456",  "Tom Tanukichi Nook", 789, '04/30'),
  ]

constructor() { }

  getTarjeta() {
    return Tarjeta
  }


  getCards() : Tarjeta[]{

    return this.tarjetas;
  }
}
