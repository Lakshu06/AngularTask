import { Component, OnInit } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  x: any;
ascendingStatus: boolean = true;
descendingStatus: boolean = true;

  data = [
    { 'name1': 'd',     'mail': 'ajkbh@gmail.com', 'contact2': '7234567890', 'address': 'jaipur',      'post': 'software engineer', 'experience': 8 },
    { 'name1': 'a',     'mail': 'hh@gmail.com', 'contact2': '1234567890', 'address': 'malviya nagar',  'post': 'network engineer', 'experience': 7 },
    { 'name1': 'b',     'mail': 'aaa@gmail.com', 'contact2': '4234567890', 'address': 'sikar',         'post': 'software developer', 'experience': 5},
    { 'name1': 'c',     'mail': 'dddd@gmail.com', 'contact2': '1834567890', 'address': 'sitapura',      'post': 'mean stack developer', 'experience': 9 },
    { 'name1': 'f',     'mail': 'j@gmail.com', 'contact2': '76234567890', 'address': 'indiagate',       'post': 'andriod developer', 'experience': 0 },
    { 'name1': 'e',     'mail': 'h@gmail.com', 'contact2': '8234567890', 'address': 'kumbha marg',      'post': 'ios developer', 'experience': 1 },
    { 'name1': 'l',      'mail': 'g@gmail.com', 'contact2': '9234567890', 'address': 'haldighati',      'post': 'drupal developer', 'experience': 19 },
    { 'name1': 'sneha',  'mail': 'k@gmail.com', 'contact2': '6234567890', 'address': 'jagatpura',       'post': 'team lead', 'experience': 2 },
    { 'name1': 'ashish', 'mail': 'm@gmail.com', 'contact2': '7034567890', 'address': 'raja park',       'post': 'tech lead', 'experience':4 },
    { 'name1': 'avinash', 'mail': 'o@gmail.com', 'contact2': '3334567890', 'address': 'durgapura',      'post': 'salsforce developer', 'experience': 6 },
    { 'name1': 'lakshita','mail': 'q@gmail.com', 'contact2': '4334567890', 'address': 'gopalpura',      'post': 'python developer', 'experience': 10 },
    { 'name1': 'h',        'mail': 'yy@gmail.com', 'contact2': '6934567890', 'address': 'sanagner',      'post': 'magento', 'experience': 12 },
    { 'name1': 'i',        'mail': 'fffffr@gmail.com', 'contact2': '9234567890', 'address': 'chatrala circle',       'post': 'ui/ux designer', 'experience': 3 },
    { 'name1': 'z',         'mail': 'ghh@gmail.com', 'contact2': '3434567890', 'address': 'partap ngar',  'post': 'associate software engineer', 'experience': 11 },
    { 'name1': 'x',         'mail': 'lakshita@gmail.com', 'contact2':'4567890', 'address': 'jawahar nagar','post': 'tester', 'experience': 10, 'companyname': 'ranosys' },
    { 'name1': 'y',         'mail': 'sneha@gmail.com', 'contact2': '0234567890', 'address': 'ajmer',     'post': 'project tester', 'experience': 8 },
    { 'name1': 'ef',        'address': 'sddg', 'post': 'software engineer', 'experience': '8' },
   {'name1': 'rsf','address': 'sanagner', 'post': 'software engineer','experience': '8','technology':'angular'}

  ];
  header: any = [];
  
  public searchString:string;
  

  constructor() {
    let keys = [];
    for (let i in this.data) {
      Object.keys(this.data[i]).forEach(function (eachKey) {
        if (keys.indexOf(eachKey) == -1) {
          keys.push(eachKey);
        }
      })

    }

    this.header = keys;
  }

  Asecsort(keyname)
{
  { this.ascendingStatus = true;
    this.descendingStatus = false;
    this.data.sort(function (a, b) {

     
        // if (a[keyname] <b[keyname] ) return -1;
        // if (a[keyname] >b[keyname] ) return 1;
        // return 0;
        if (a === b) {
          return 0;
      }
        if( a[keyname]== "")
        return 1;
    if(b[keyname] == "")
        return -1;
    return ((a[keyname]  < b[keyname]) ? -1 : ((a[keyname]>b[keyname]) ? 1 : 0));
   
      
    });
  }

}
descsort(keyname)
{
  { this.ascendingStatus = false;
    this.descendingStatus = true;
    this.data.sort(function (a, b) {  
  // if (a[keyname] >b[keyname]  ) return -1;
// if (a[keyname] <b[keyname] ) return 1;
// return 0;
if(a===b)
{
  return 0;
}
    else if(a[keyname] == "")
            return 1;
      else  if(b[keyname]== "")
            return -1;
      else  return ((a[keyname] < b[keyname]) ? 1 : ((a[keyname] > b[keyname]) ? -1 : 0));
    });
  }

}
  ngOnInit() {
    for (let key in this.data) {
      console.log(this.data.hasOwnProperty(key));

    }
  }
  setKey(data){
    this.x = data;
    console.log(this.x);
  }
 

}
