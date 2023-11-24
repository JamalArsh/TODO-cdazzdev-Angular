import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.sass',
})
export class AddNewTaskComponent implements OnInit {
  form!: FormGroup;
  isAddNew = true;
  @Input() modalType: any = '';
  @Input() title: any = '';
  @Input() description: any = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.maxLength(200)],
    });

    if (this.modalType === 'new') {
      this.isAddNew = true;
      this.title = '';
      this.description = '';
    } else if (this.modalType === 'edit') {
      this.isAddNew = false;
      this.form.patchValue({
        title: this.title,
        description: this.description,
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('submit', typeof this.form);
    } else {
      Object.values(this.form.controls).forEach((control: any) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
