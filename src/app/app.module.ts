import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
            declarations: [
              AppComponent,
              TodoListComponent,
              TodoItemComponent,
              CreateTodoComponent,
              ModalComponent
            ],
            imports: [
              BrowserModule,
              FormsModule,
              AppRoutingModule,
              HttpClientModule,
              FontAwesomeModule,
              BrowserAnimationsModule,
              MatDialogModule
            ],
            providers: [],
            bootstrap: [AppComponent],
            entryComponents: [ModalComponent]
          })
export class AppModule {
}
