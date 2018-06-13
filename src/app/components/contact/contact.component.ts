import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../share/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
@Input() contact: Contact;
@Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
