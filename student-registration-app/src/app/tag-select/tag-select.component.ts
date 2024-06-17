import { Component, ElementRef, Input, effect, input, viewChild } from '@angular/core';
import { DocumentsCategory } from '../app.component';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'tag-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatAutocompleteModule, MatChipsModule, MatIconModule],
  templateUrl: './tag-select.component.html',
  styleUrl: './tag-select.component.css'
})
export class TagSelectComponent {
  @Input() data: DocumentsCategory[] = [];
	inputRef = viewChild<ElementRef<HTMLInputElement>>('filteringListInput');
	hideCategories = input<boolean>();
	// data = input<DocumentsCategory[]>();
	placeholder = 'Search...';
	// searchBy: string;
	// showList: boolean;
	originalData: DocumentsCategory[] = [];
	items: DocumentsCategory[] = [];

  selectedOptions: any[] = [];
  
	// disabled: boolean;


  searchField = new FormControl();

  constructor(public ref: ElementRef) {
		effect(() => {
			if (!this.data || (this.data && !this.data.length)) {
				return;
			}
			this.setItems(this.data)
		})
	}

  private setItems(v?: Array<any>) {
		const values: any[] = JSON.parse(JSON.stringify(v));
		this.originalData = [];
		this.items = [];
		this.originalData = JSON.parse(JSON.stringify(values));

		// values.forEach((value) => {
		// 	const itms: any[] = value.items;
		// 	if (itms && itms[0] && typeof itms[0] === 'string') {
		// 		value.items = itms.map((i) => {
		// 			return {name: i};
		// 		});
		// 	}
		// 	this.items.push({
		// 		...value,
		// 		selected: false
		// 	});
		// });
    console.log(this.originalData[0])
	}


  addOption(options: any) {
    this.selectedOptions = []
    console.log('Selected option',options, this.searchField)
    this.selectedOptions = options.value
    // this.selectedOptions.push(option);
    this.searchField.setValue(this.selectedOptions);
  }

  removeOption(option: string) {
    this.selectedOptions = this.selectedOptions.filter(item => item !== option);
    this.searchField.setValue(this.selectedOptions);
  }
}
