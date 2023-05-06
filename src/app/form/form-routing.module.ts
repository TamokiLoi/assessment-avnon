import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormAnswersComponent } from './form-answers/form-answers.component';

const routes: Routes = [
    {
        path: '',
        component: FormComponent
    },
    {
        path: 'builder',
        component: FormBuilderComponent
    },
    {
        path: 'answers',
        component: FormAnswersComponent
    },
];
export const FormRoutingModule = RouterModule.forChild(
    routes
);
