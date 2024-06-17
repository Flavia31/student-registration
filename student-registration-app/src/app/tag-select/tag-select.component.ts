import { Component, ElementRef, input, viewChild } from '@angular/core';
import { DocumentsCategory } from '../app.component';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'tag-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tag-select.component.html',
  styleUrl: './tag-select.component.css'
})
export class TagSelectComponent {
	inputRef = viewChild<ElementRef<HTMLInputElement>>('filteringListInput');
	hideCategories = input<boolean>();
	data = input<DocumentsCategory[]>();
	placeholder = 'Search...';
	// searchBy: string;
	// showList: boolean;
	originalData: DocumentsCategory[] = [];
	items: DocumentsCategory[] = [];
  
	// disabled: boolean;


  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
