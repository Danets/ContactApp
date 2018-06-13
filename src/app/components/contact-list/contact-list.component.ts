import { Component, OnInit } from '@angular/core';
import { DataService } from '../../share/data.service';
import { Contact } from '../../share/contact';

import {Observable, BehaviorSubject} from 'rxjs';
//import { fromEvent, merge } from 'rxjs';
//import {distinct, filter, map, debounceTime, tap, flatMap} from 'rxjs/operators';
//import {HttpClient} from '@angular/common/http';
//import * as _ from 'lodash';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
contacts$: Observable<Contact[]>;

/*filter data*/
isDesc: boolean = false;
column: string = 'firstName';
direction: number;

constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.contacts$ = this.dataService.getData();
  	//.subscribe(contacts => this.contacts$ = contacts);
  }
  
  onSort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

/*INFINITE SCROLL*/
  onScroll() {
    console.log("scrolled!!");
  }

}
