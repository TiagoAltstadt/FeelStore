import { Component, OnInit } from '@angular/core';
import { Feeling } from './feeling.model';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css'],
})
export class FeelingsComponent implements OnInit {
  selectedFeeling: Feeling;

  constructor() {}

  ngOnInit(): void {}
}
