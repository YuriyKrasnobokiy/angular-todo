import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Імпортуємо CommonModule

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  imports: [FormsModule, CommonModule], 
  styleUrl: './todo.component.scss',
  standalone: true
})
export class TodoComponent {
  tasks: string[] = [];  // Це масив для збереження завдань
  newTask: string = '';   // Це змінна для введення нового завдання

  addTask(): void {
    if (this.newTask.trim()) {        // Перевіряємо, чи не порожнє завдання
      this.tasks.push(this.newTask);  // Додаємо нове завдання до списку
      this.newTask = '';              // Очищаємо поле вводу
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
