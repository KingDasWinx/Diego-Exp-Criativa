import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

interface Appointment {
  time: string;
  name: string;
  status: 'Confirmado' | 'Pendente';
  statusClass: 'green' | 'yellow';
}

interface DonationForm {
  name: string;
  cpf: string;
  phone: string;
  date: string;
  time: string;
  email: string;
}

@Component({
  selector: 'app-donation',
  imports: [FormsModule, NgClass],
  templateUrl: './donation.html',
  styleUrl: './donation.css',
})
export class Donation {
  form: DonationForm = {
    name: '',
    cpf: '',
    phone: '',
    date: '',
    time: '',
    email: '',
  };

  timeSlots = ['08:00', '09:00', '10:00', '14:00', '15:00', '16:00'];

  today = new Date().toISOString().split('T')[0];

  appointments: Appointment[] = [
    { time: '08:00', name: 'João Silva',      status: 'Confirmado', statusClass: 'green'  },
    { time: '09:30', name: 'Maria Santos',    status: 'Confirmado', statusClass: 'green'  },
    { time: '10:15', name: 'Carlos Oliveira', status: 'Pendente',   statusClass: 'yellow' },
    { time: '14:00', name: 'Ana Costa',       status: 'Confirmado', statusClass: 'green'  },
  ];

  submitted = false;

  onSubmit() {
    if (!this.form.name || !this.form.cpf || !this.form.phone || !this.form.date || !this.form.time) {
      return;
    }
    this.appointments = [
      ...this.appointments,
      { time: this.form.time, name: this.form.name, status: 'Pendente', statusClass: 'yellow' },
    ];
    this.submitted = true;
    this.form = { name: '', cpf: '', phone: '', date: '', time: '', email: '' };
    setTimeout(() => (this.submitted = false), 3000);
  }
}
