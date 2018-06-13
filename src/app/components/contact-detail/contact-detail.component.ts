import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Contact } from '../../share/contact';

import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs';

import { DataService } from '../../share/data.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit, OnDestroy {
contact: Contact;
subscription: Subscription;

  constructor(
	private route: ActivatedRoute,
  private router: Router,
  private dataService: DataService
  ) { }

  ngOnInit() {
  	this.getContact();
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  getContact(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.subscription = this.dataService.getDataById(id)
  	.subscribe(contact => this.contact = contact);
  }
  
  onBack(): void {
  	this.router.navigate(['/contacts']);
  }

}
