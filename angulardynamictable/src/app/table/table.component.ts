import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
import { FilterPipe } from 'src/app/table/shared/filter';




@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	x: any ;
	@Input() tableObj: any ;
	
	public searchString: any;
	

	constructor() {
	}

	transform(items: any[], field: string, value: any): any[] {

        if (!items) {
            return []; 
               }

        if (!field || !value) {
            return items;
        }
        return items.filter(singleItem =>
            singleItem[field].toLowerCase().indexOf(value.toLowerCase()) !=-1)
        ;
	}
	
	Asecsort(keyname) {
		for (let key of this.tableObj.data) {
			if (!isNaN(key[keyname])) {
				this.tableObj.data.sort(function (a, b) {
					if (a[keyname] === b[keyname]) {
						return 0;
					}
					else if (a[keyname] == "")
						return 1;
					else if (b[keyname] == "")
						return -1;

					else return a[keyname] - b[keyname]
				});
			}
			else {
				this.tableObj.data.sort(function (a, b) {
					if (a[keyname] === b[keyname]) {
						return 0;
					}
					else if (a[keyname] == "")
						return 1;
					else if (b[keyname] == "")
						return -1;
					else return ((a[keyname] < b[keyname]) ? -1 : ((a[keyname] > b[keyname]) ? 1 : 0));
				});
			}

		}
	}

	descsort(keyname) {
		for (let key of this.tableObj.data) {
			if (!isNaN(key[keyname])) {
				this.tableObj.data.sort(function (a, b) {
					if (a[keyname] === b[keyname]) {
						return 0;
					}
					else if (a[keyname] == "")
						return 1;
					else if (b[keyname] == "")
						return -1;
					return b[keyname] - a[keyname]
				});
			}
			else {
				this.tableObj.data.sort(function (a, b) {
					if (a === b) {
						return 0;
					}
					else if (a[keyname] == "")
						return 1;
					else if (b[keyname] == "")
						return -1;
					else return ((a[keyname] < b[keyname]) ? 1 : ((a[keyname] > b[keyname]) ? -1 : 0));
				});
			}
		}
	}

	ngOnInit() {
		for (let x of this.tableObj.headers) {
			for (let dataValue of this.tableObj.data) {
				if (!dataValue[x.key]) {
					dataValue[x.key] = "";
				}
			}
		}
		
		
	}
	saveRange(data): void {
		this.searchString = data;
		console.log(this.searchString);
	}
	setKey(keyvalue){
		this.x=keyvalue;
		console.log(this.x);
			
	}
	
}

