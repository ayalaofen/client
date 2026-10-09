import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from '../components/home-page/home-page';
import { User } from '../components/user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomePage,User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('client');
}
