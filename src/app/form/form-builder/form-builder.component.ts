import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilderDialogComponent } from './form-builder-dialog/form-builder-dialog.component';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { QUESTION_TYPE } from '../form.constant';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
    questionsForm: any;
    QUESTION_TYPE = QUESTION_TYPE;

    constructor(
        public dialog: MatDialog,
        protected fb: FormBuilder,
        private router: Router,
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.questionsForm = this.fb.group({
            questions: this.fb.array([]),
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(FormBuilderDialogComponent, { width: '500px' });

        dialogRef.afterClosed()
            .subscribe(res => {
                console.log('result', res);
                if (res && res.data) {
                    const questionData = res.data;
                    if (questionData.questionType === this.QUESTION_TYPE[0].value) {
                        (this.questionsForm.get('questions') as FormArray).push(
                            this.fb.group({
                                title: [questionData.questionName],
                                answer: [''],
                                answers: this.fb.array([]),
                                isSingleAnswer: [false],
                                isRequired: [questionData.isRequired],
                            })
                        )
                        questionData.answerOptions.forEach((item: any) => {
                            (this.questionsForm.get('questions').controls[this.questionsForm.get('questions').controls.length - 1].get('answers') as FormArray).push(this.fb.group({
                                title: [item],
                                isSelect: false
                            }))
                        })
                    } else {
                        (this.questionsForm.get('questions') as FormArray).push(
                            this.fb.group({
                                title: [questionData.questionName],
                                answer: ['', questionData.isRequired ? Validators.required : []],
                                answers: this.fb.array([]),
                                isSingleAnswer: [true],
                                isRequired: [questionData.isRequired],
                            })
                        )
                    }
                }
                console.log('index', this.questionsForm.get('questions').controls.length);
                console.log('questionsForm', this.questionsForm);
            });
    }

    submitForm() {
        console.log('questionsForm', this.questionsForm.value);
        const questionsCurrent = this.questionsForm.value
        const questionsLocalStorage = JSON.parse(localStorage.getItem('question-data') as string) || [];
        questionsCurrent.questions.forEach((item: any) => {
            questionsLocalStorage.push(item)
        })
        console.log('questionsLocalStorage', questionsLocalStorage);
        localStorage.setItem('question-data', JSON.stringify(questionsLocalStorage))
        this.router.navigate([`./form/answers`]);
    }
}
