import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Input } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  x: any;
  @Input() data: any;
  @Input() data1:any;
  public y:any;


  header: any;
  public searchString: any;

  constructor() {
    this.setchangesValue();
  }

  Asecsort(keyname) {
    for (let key of this.data) {
      if (!isNaN(key[keyname])) {
        this.data.sort(function (a, b) {
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
        this.data.sort(function (a, b) {
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
    for (let key of this.data) {
      if (!isNaN(key[keyname])) {
        this.data.sort(function (a, b) {
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
        this.data.sort(function (a, b) {
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
    for (let x of this.header) {
      for (let dataValue of this.data) {
        if (!dataValue[x]) {
          dataValue[x] = "";
        }
      }
    }

  }

  setKey(data) {
    this.x = data;

  }


  saveRange(data): void {
    this.searchString = data;

  }

  ngOnChanges(changes) {
    this.data = changes.data.currentValue;
    this.setchangesValue();
    this.maping();

  }
  setchangesValue() {
    let keys = [];
    for (let i in this.data) {

      Object.keys(this.data[i]).forEach(function (eachKey) {
        
        if (keys.indexOf(eachKey) == -1 ){
        keys.push(eachKey);
       
        }
       
      })
    }
    this.header = keys;
  }


  maping(){
    
  this.y =  this.data1;
  console.log(this.y);
  }

  
}

