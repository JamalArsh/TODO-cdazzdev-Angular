import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { NzMessageService } from 'ng-zorro-antd/message';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzButtonModule,
    NzIconModule,
    NzCollapseModule,
    NzAlertModule,
    NzModalModule,
    NzGridModule,
    NzToolTipModule,
    NzPopconfirmModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'todo-cdazzdev';

  customStyle = {
    // 'margin-bottom': '24px',
    'background-color': '#A6FF96',
  };

  customStyle2 = {
    // 'margin-bottom': '24px',
  };

  tasks = [
    {
      title: 'First task',
      description: 'first task description',
      isCompleted: false,
    },
    {
      title: 'Second task',
      description: 'second task description',
      isCompleted: true,
    },
    {
      title: 'Third task',
      description: 'third task description',
      isCompleted: false,
    },
    {
      title: 'Fourth task',
      description: 'fourth task description',
      isCompleted: true,
    },
  ];

  constructor(
    private modalService: NzModalService,
    private nzMessageService: NzMessageService,
    private dataService: DataService
  ) {}

  addNewTask() {
    const modal: NzModalRef = this.modalService.create({
      nzContent: AddNewTaskComponent,
      nzWidth: '600px',
      nzFooter: null,
      nzCentered: true,
    });

    modal.componentInstance.modalType = 'new';
  }

  editTask(title: string, description: string) {
    console.log('Edit task function\n' + title + '\n' + description);
    const modal: NzModalRef = this.modalService.create({
      nzContent: AddNewTaskComponent,
      nzWidth: '600px',
      nzFooter: null,
      nzCentered: true,
    });

    modal.componentInstance.modalType = 'edit';
    modal.componentInstance.title = title;
    modal.componentInstance.description = description;
  }

  cancel(): void {
    this.nzMessageService.info('Delete canceled');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }
}
