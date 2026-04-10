import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  private readonly titles: Record<string, string> = {
    bloodbank: 'Estoque de Sangue',
    campaign: 'Campanhas',
    donation: 'Agendamento de Doação',
  };

  constructor(private router: Router) {}

  get pageTitle(): string {
    const segment = this.router.url.replace('/', '').split('/')[0];
    return this.titles[segment] ?? 'HemoControl';
  }

  get currentDate(): string {
    return new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
