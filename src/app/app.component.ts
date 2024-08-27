import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view: 'month' | 'week' | 'day' = 'month';
  currentDate: Date = new Date();
  
  // Cambia la vista actual
  setView(view: 'month' | 'week' | 'day') {
    this.view = view;
  }

  // Cambia la fecha actual
  setCurrentDate(date: Date) {
    this.currentDate = date;
  }

  // Obtener los días del mes
  getDaysInMonth() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }

  // Obtener el inicio de la semana
  getStartOfWeek() {
    const start = new Date(this.currentDate);
    start.setDate(start.getDate() - start.getDay());
    return start;
  }

  // Obtener los días de la semana
  getDaysOfWeek() {
    const startOfWeek = this.getStartOfWeek();
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  }

  // Obtener los eventos del día
  getEventsForDay(date: Date) {
    // Implementa la lógica para obtener eventos del día
    return [];
  }
}
