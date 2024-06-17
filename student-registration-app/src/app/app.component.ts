import { Component, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagSelectComponent } from './tag-select/tag-select.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {toSignal} from "@angular/core/rxjs-interop";
import {startWith} from "rxjs";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewStudentRegistrationPageComponent } from './new-student-registration-page/new-student-registration-page.component';

export type Document = {
	id: number;
	name: string;
	detailLabel: string;
	selected?: boolean;
	disabled?: boolean;
}

export type DocumentsCategory = {
	name: string;
	items: Document[]
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewStudentRegistrationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  availableDocuments: DocumentsCategory[] = [
		{
			name: 'Most used',
			items: [
				{
					id: 1,
					name: 'Document 1',
					detailLabel: 'Details'
				},
				{
					id: 2,
					name: 'Document 2',
					detailLabel: 'Details'
				},
				{
					id: 3,
					name: 'Document 3',
					detailLabel: 'Details'
				},
				{
					id: 4,
					name: 'Document 4',
					detailLabel: 'Details'
				},
				{
					id: 5,
					name: 'Document 5',
					detailLabel: 'Details'
				},
			]
		},
		{
			name: 'Further documents',
			items: [
				{
					id: 6,
					name: 'Document 6',
					detailLabel: 'Details'
				},
				{
					id: 7,
					name: 'Document 7',
					detailLabel: 'Details'
				},
				{
					id: 8,
					name: 'Document 8',
					detailLabel: 'Details'
				},
				{
					id: 9,
					name: 'Document 9',
					detailLabel: 'Details'
				},
				{
					id: 10,
					name: 'Document 10',
					detailLabel: 'Details'
				},
				{
					id: 11,
					name: 'Document 11',
					detailLabel: 'Details'
				},
				{
					id: 12,
					name: 'Document 12',
					detailLabel: 'Details'
				},
			]
		}
	];
	form = this.fb.group({
		documents: this.fb.control<Document[]>([]),
	})
	formChanges = toSignal(this.form.controls.documents.valueChanges.pipe(startWith(this.form.controls.documents.value)));

	constructor(private fb: FormBuilder) {
		effect(() => console.log(this.formChanges()))
	}
}
