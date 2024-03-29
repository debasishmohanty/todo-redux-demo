import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  statusArr: Array<any>;
  selectedStatus:number;
  constructor() {
    this.statusArr = [
      {'id': 1, 'title': 'Not started'},
      {'id': 2, 'title': 'In Progress'},
      {'id': 3, 'title': 'Completed'}
    ];
    this.selectedStatus = 1;
  }

  ngOnInit(): void {
  }
  createTodo() {
    alert(1);
  }
}
