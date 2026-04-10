import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface BloodStock {
  type: string;
  cssClass: string;
  quantity: number;
  expiry: number;
  status: 'Ótimo' | 'Normal' | 'Crítico';
  statusClass: 'green' | 'yellow' | 'red';
}

@Component({
  selector: 'app-bloodbank',
  imports: [NgClass],
  templateUrl: './bloodbank.html',
  styleUrl: './bloodbank.css',
})
export class Bloodbank {
  stocks: BloodStock[] = [
    { type: 'O+',  cssClass: 'o-pos',  quantity: 350, expiry: 45, status: 'Ótimo',   statusClass: 'green'  },
    { type: 'O−',  cssClass: 'o-neg',  quantity: 120, expiry: 10, status: 'Crítico', statusClass: 'red'    },
    { type: 'A+',  cssClass: 'a-pos',  quantity: 280, expiry: 38, status: 'Ótimo',   statusClass: 'green'  },
    { type: 'A−',  cssClass: 'a-neg',  quantity:  95, expiry:  5, status: 'Crítico', statusClass: 'red'    },
    { type: 'B+',  cssClass: 'b-pos',  quantity: 200, expiry: 42, status: 'Ótimo',   statusClass: 'green'  },
    { type: 'B−',  cssClass: 'b-neg',  quantity:  85, expiry: 15, status: 'Normal',  statusClass: 'yellow' },
    { type: 'AB+', cssClass: 'ab-pos', quantity:  75, expiry: 21, status: 'Normal',  statusClass: 'yellow' },
    { type: 'AB−', cssClass: 'ab-neg', quantity:  55, expiry:  8, status: 'Crítico', statusClass: 'red'    },
  ];

  get totalStock(): number {
    return this.stocks.reduce((sum, s) => sum + s.quantity, 0);
  }

  get criticalCount(): number {
    return this.stocks.filter(s => s.statusClass === 'red').length;
  }
}
