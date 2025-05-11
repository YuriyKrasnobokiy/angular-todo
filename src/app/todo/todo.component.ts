import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Імпортуємо CommonModule

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  imports: [FormsModule, CommonModule], 
  styleUrl: './todo.component.css',
  standalone: true
})
export class TodoComponent implements OnInit {
  tasks: {text: string, done: boolean}[] = [];
  newTask: string = '';   // Це змінна для введення нового завдання

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), done: false });
      this.newTask = '';
      this.saveTasks();
    }
  }
  
  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }
  
  toggleDone() {
    this.saveTasks();
  }
  
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  ngOnInit() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
}


