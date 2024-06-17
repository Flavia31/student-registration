import { Component, ElementRef, Input, effect, input, viewChild } from '@angular/core';
import { DocumentsCategory } from '../app.component';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { Observable, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'tag-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule, MatAutocompleteModule, MatChipsModule, MatIconModule],
  templateUrl: './tag-select.component.html',
  styleUrl: './tag-select.component.css'
})
export class TagSelectComponent {
  @Input() data: DocumentsCategory[] = [];
  @Input() hideCategories: boolean = true;
	originalData: DocumentsCategory[] = [];
	items: Observable<any[]> = new Observable<any[]>();
  selectedOptions: any[] = [];
  searchField = new FormControl();
  dropdownField =new FormControl();

  constructor(public ref: ElementRef) {
		effect(() => {
			if (!this.data || (this.data && !this.data.length)) {
				return;
			}
			this.setItems(this.data)
		})

    this.items =  this.searchField.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    )
	}

  private _filter(value: string): any {
    this.hideCategories = true
    const filterValue = value.toLowerCase();
    this.originalData.forEach( values => {
      values.items = values.items.filter(option => option.name.toLowerCase() === filterValue)

    }
    )

  }

  private setItems(v?: Array<any>) {
		const values: any[] = JSON.parse(JSON.stringify(v));
		this.originalData = [];
		this.originalData = JSON.parse(JSON.stringify(values));
	}


  addOption(options: any) {
    this.selectedOptions = []
    this.selectedOptions = options.value
    this.dropdownField.setValue(this.selectedOptions);
  }

  removeOption(option: string) {
    this.selectedOptions = this.selectedOptions.filter(item => item !== option);
    this.dropdownField.setValue(this.selectedOptions);
  }
}
