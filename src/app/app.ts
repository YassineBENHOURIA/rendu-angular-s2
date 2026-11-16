import { Component } from '@angular/core';

import { Header } from './sharedcomponent/header/header';
import { Home } from './pages/home/home';
import { ListConf } from './pages/list-conf/list-conf';
import { Footer } from './sharedcomponent/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, ListConf, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
