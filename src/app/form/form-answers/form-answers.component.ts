import { Component } from '@angular/core';

@Component({
    selector: 'app-form-answers',
    templateUrl: './form-answers.component.html',
    styleUrls: ['./form-answers.component.scss']
})
export class FormAnswersComponent {
    questions: any = []

    constructor() { }

    ngOnInit() {
        this.initData();
    }

    initData() {
        if(localStorage.getItem('question-data')) {
            const data = JSON.parse(localStorage.getItem('question-data') as string);
            this.questions = data;
        } else {
            this.questions = [];
        }
        console.log('1', this.questions)
    }
}
