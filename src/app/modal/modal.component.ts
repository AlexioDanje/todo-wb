import {Component, Inject, OnInit, Output} from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {EventEmitter} from "events";
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  @Output() submitClicked = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<ModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private todoService: TodoService) { }
  id: number;
  ngOnInit() {
    console.log(this.data.id);
    console.log(this.data.title);
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    this.id = +this.data.id;
    console.log(this.id);
    this.todoService.update(this.id,this.data.title)
      .subscribe(() =>  'The todo was updated successfully!',
        error => console.error('Error occurred while updating the todo', error)

      );
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }
}
