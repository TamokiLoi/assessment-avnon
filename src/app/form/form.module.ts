import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormAnswersComponent } from './form-answers/form-answers.component';
import { FormBuilderDialogComponent } from './form-builder/form-builder-dialog/form-builder-dialog.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
    declarations: [
        FormComponent,
        FormBuilderComponent,
        FormAnswersComponent,
        FormBuilderDialogComponent
    ],
    imports: [
        CommonModule,
        FormRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        MatDividerModule
    ],
    bootstrap: [FormComponent]
})
export class FormModule { }
