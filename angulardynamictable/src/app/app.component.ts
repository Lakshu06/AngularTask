import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public title = "Dynamic view";
  

  data= [
    { 'name': 'd', 'mail': 'ajkbh@gmail.com', 'contact2': '7234567890', 'address': 'jaipur', 'post': 'software engineer', 'experience': '8 ' },
    { 'name': 'a', 'mail': 'hh@gmail.com', 'contact2': '1234567890', 'address': 'malviya nagar', 'post': 'network engineer', 'experience': '7' },
    { 'name': 'b', 'mail': 'aaa@gmail.com', 'contact2': '4234567890', 'address': 'sikar', 'post': 'software developer', 'experience': '5 ' },
    { 'name': 'c', 'mail': 'dddd@gmail.com', 'contact2': '1834567890', 'address': 'sitapura', 'post': 'mean stack developer', 'experience': '9' },
    { 'name': 'f', 'mail': 'j@gmail.com', 'contact2': '76234567890', 'address': 'indiagate', 'post': 'andriod developer' },
    { 'name': 'e', 'mail': 'h@gmail.com', 'contact2': '8234567890', 'address': 'kumbha marg', 'post': 'ios developer', 'experience': ' 1' },
    { 'name': 'l', 'mail': 'g@gmail.com', 'contact2': '9234567890', 'address': 'haldighati', 'post': 'drupal developer', 'experience': '19' },
    { 'name': 'sneha', 'mail': 'k@gmail.com', 'contact2': '6234567890', 'address': 'jagatpura', 'post': 'team lead', 'experience': '2 ' },
    { 'name': 'ashish', 'mail': 'm@gmail.com', 'contact2': '7034567890', 'address': 'raja park', 'post': 'tech lead', 'experience': '4' },
    { 'name': 'avinash', 'mail': 'o@gmail.com', 'contact2': '3334567890', 'address': 'durgapura', 'post': 'salsforce developer', 'experience': ' 6' },
    { 'name': 'lakshita', 'mail': 'q@gmail.com', 'contact2': '4334567890', 'address': 'gopalpura', 'post': 'python developer', 'experience': '10' },
    { 'name': 'h', 'mail': 'yy@gmail.com', 'contact2': '6934567890', 'address': 'sanagner', 'post': 'magento', 'experience': '12' },
    { 'name': 'i', 'mail': 'fffffr@gmail.com', 'contact2': '9234567890', 'address': 'chatrala circle', 'post': 'ui/ux designer', 'experience': '3' },
    { 'name': 'z', 'mail': 'ghh@gmail.com', 'contact2': '3434567890', 'address': 'partap ngar', 'post': 'associate software engineer', 'experience': '11' },
    { 'name': 'x', 'mail': 'lakshita@gmail.com', 'contact2': '4567890', 'address': 'jawahar nagar', 'post': 'tester', 'experience': ' 10', 'companyname': 'ranosys' },
    { 'name': 'y', 'mail': 'sneha@gmail.com', 'contact2': '0234567890', 'address': 'ajmer', 'post': 'project tester', 'experience': '8' },
    { 'name': 'ef', 'address': 'sddg', 'post': 'software engineer', 'experience': ' 8 ' },
    { 'name': 'rsf', 'address': 'sanagner', 'post': 'software engineer', 'experience': '7', 'technology': 'angular' },
    { 'name': 'xyz', 'id': '19077'  }
  ]
  data1 = [
    {'column':'name',       'search':true,'sort':false},
    {'column':'mail',       'search':true,'sort':true},
    {'column':'contact2',   'search':true,'sort':false},
    {'column':'address',    'search':true,'sort':true},
    {'column':'post',       'search':false,'sort':false},
    {'column':'experience', 'search':true,'sort':true},
    {'column':'id',         'search':false,'sort':true},
    {'column':'technology', 'search':false,'sort':false},
    {'column':'companyname', 'search':true,'sort':true},
  ]
  

}
