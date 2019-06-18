import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares: any = [
    { active: false, nombre: 'Floristeria' },
    { active: true, nombre: 'Restaurante' },
    { active: true, nombre: 'Carpinteria' },
    { active: true, nombre: 'Software' }
  ]
  personas = [
    { nombre: 'Rafael Belalcazar', edad: 22 },
    { nombre: 'David Lion', edad: 22 },
    { nombre: 'Juanito Perez', edad: 9 },
    { nombre: 'Pepito', edad: 8 }

  ]
  lat: number = 2.4570401
  lng: number = -76.6648248
}
