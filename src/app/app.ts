import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from '../components/home-page/home-page';
import { ContactPerson } from '../components/contact-person/contact-person';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomePage,ContactPerson],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('client');
}
