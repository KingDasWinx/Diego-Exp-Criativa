import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface CampaignItem {
  title: string;
  location: string;
  dateRange: string;
  confirmed: number;
  goal: number;
  status: 'Ativa' | 'Planejada' | 'Encerrada';
  statusClass: 'green' | 'yellow' | 'red';
}

@Component({
  selector: 'app-campaign',
  imports: [NgClass],
  templateUrl: './campaign.html',
  styleUrl: './campaign.css',
})
export class Campaign {
  campaigns: CampaignItem[] = [
    {
      title: 'Doação em Empresa',
      location: 'Tech Solutions LTDA',
      dateRange: '20/03/2026 – 22/03/2026',
      confirmed: 52,
      goal: 80,
      status: 'Ativa',
      statusClass: 'green',
    },
    {
      title: 'Ação Comunitária – Bairro Centro',
      location: 'Praça Central, Bairro Centro',
      dateRange: '25/03/2026 – 29/03/2026',
      confirmed: 48,
      goal: 120,
      status: 'Ativa',
      statusClass: 'green',
    },
    {
      title: 'Arrecadação – Hospital Regional',
      location: 'Hospital Regional',
      dateRange: '01/04/2026 – 05/04/2026',
      confirmed: 0,
      goal: 100,
      status: 'Planejada',
      statusClass: 'yellow',
    },
  ];

  progressPercent(campaign: CampaignItem): number {
    return Math.round((campaign.confirmed / campaign.goal) * 100);
  }
}
