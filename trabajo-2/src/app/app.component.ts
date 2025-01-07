import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonContent, IonTitle, IonToolbar, IonHeader, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}








