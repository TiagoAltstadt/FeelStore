import { Component, Input, OnInit } from '@angular/core';
import { Feeling } from '../feeling.model';

@Component({
  selector: 'app-feeling-detail',
  templateUrl: './feeling-detail.component.html',
  styleUrls: ['./feeling-detail.component.css']
})
export class FeelingDetailComponent implements OnInit {
  @Input() feeling: Feeling;
  constructor() { }

  ngOnInit(): void {
  }

}
