import { Component, effect } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TagSelectComponent } from '../tag-select/tag-select.component';

import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { DocumentsCategory } from '../app.component';

@Component({
  selector: 'new-student-registration-page',
  standalone: true,
  imports: [TagSelectComponent, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatAutocompleteModule, MatChipsModule, MatIconModule],
  templateUrl: './new-student-registration-page.component.html',
  styleUrl: './new-student-registration-page.component.css'
})
export class NewStudentRegistrationPageComponent {
	form: any;

	constructor(private fb: FormBuilder) {
		this.	form = this.fb.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(),
      courses: new FormControl()
    })
	}

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
}
