import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.data = this.route.snapshot.data;
  }

}
