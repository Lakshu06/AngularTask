import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = [
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsa', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsr', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsd', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+', 'companyname': 'ranosys' },
    { 'name1': 'sdsr', 'mail': 'djkbh@gmail.com', 'contact2': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    { 'name1': 'sdsr', 'contactsdfsdf': '1234567890', 'address': 'sddg', 'post': 'software engineer', 'experience': '8+' },
    {'technology':'angular'},

  ];
  header: any = [];

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

  ngOnInit() {
    for (let key in this.data) {
      console.log(this.data.hasOwnProperty(key));

    }
  }

}
