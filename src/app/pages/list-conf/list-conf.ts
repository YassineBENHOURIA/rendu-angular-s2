import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

export interface Conference {
  id: number;
  picture: string;
  title: string;
  date: Date;
  address: string;
  availablePlaces: number;
}

@Component({
  selector: 'app-list-conf',
  imports: [DatePipe],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  // Liste statique des conférences
  conferences: Conference[] = [
    {
      id: 1,
      picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      title: 'AI & Machine Learning',
      date: new Date(2026, 11, 20),
      address: 'Tunis, Tunisie',
      availablePlaces: 45,
    },
    {
      id: 2,
      picture: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
      title: 'Web Development Conference',
      date: new Date(2026, 11, 25),
      address: 'Sousse, Tunisie',
      availablePlaces: 12,
    },
    {
      id: 3,
      picture: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      title: 'Cloud Computing Summit',
      date: new Date(2026, 11, 30),
      address: 'Sfax, Tunisie',
      availablePlaces: 0,
    },
  ];
}
