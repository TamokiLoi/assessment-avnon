import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { QUESTION_TYPE } from '../../form.constant';

@Component({
    selector: 'app-form-builder-dialog',
    templateUrl: './form-builder-dialog.component.html',
    styleUrls: ['./form-builder-dialog.component.scss']
})
export class FormBuilderDialogComponent {
    questionForm: any;
    QUESTION_TYPE = QUESTION_TYPE;

    constructor(
        public dialogRef: MatDialogRef<FormBuilderDialogComponent>,
        protected fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.questionForm = this.fb.group({
            questionName: ['', Validators.required],
            questionType: [QUESTION_TYPE[0].value, Validators.required],
            answerOptions: this.fb.array([]),
            isRequired: [false],
        });
    }

    changeQuestionType(value: string = this.QUESTION_TYPE[0].value) {
        if (value !== this.QUESTION_TYPE[0].value) {
            while (this.questionForm.get('answerOptions').controls.length !== 0) {
                (this.questionForm.get('answerOptions') as FormArray).removeAt(0)
            }
            this.questionForm.get('answerOptions').updateValueAndValidity();
        }
    }

    addAnswerForm() {
        (this.questionForm.get('answerOptions') as FormArray).push(this.fb.control('', Validators.required))
    }

    removeAnswer(index: number) {
        (this.questionForm.get('answerOptions') as FormArray).removeAt(index);
    }

    checkDisabled() {
        if(this.questionForm.valid) {
            if(this.questionForm.get('questionType').value === this.QUESTION_TYPE[0].value && this.questionForm.get('answerOptions').controls.length === 0) {
                return true;
            }
            return false;
        } else {
            return true;
        }
    }

    submitForm() {
        this.dialogRef.close({ data: this.questionForm.value })
        console.log(this.questionForm.value )
    }
}
