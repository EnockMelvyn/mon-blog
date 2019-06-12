import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: 'Une nouvelle année',
      content: 'Nous vous souhaitons nos meilleurs voeux pour cette année 2019.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: "L'amour est dans l'air",
      content: "Que l'Amour vous accompagne tout au long de cette journée de St Valentin.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Paquinou 2019',
      content: " Que cette résurrection du Christ soit pour nous tous une renaissance. Bonne fête à chacun.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Aïd el Fitr 2019',
      content: " Bonne fête de Ramadan à tous et à toutes. Qu'Allah nous garde.",
      loveIts: 3,
      created_at: new Date()
    }
  ];
}
