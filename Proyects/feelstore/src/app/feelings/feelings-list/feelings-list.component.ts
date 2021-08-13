import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Feeling } from '../feeling.model';

@Component({
  selector: 'app-feelings-list',
  templateUrl: './feelings-list.component.html',
  styleUrls: ['./feelings-list.component.css'],
})
export class FeelingsListComponent implements OnInit {
  @Output() feelingWasSelected = new EventEmitter<Feeling>();

  feelings: Feeling[] = [
    new Feeling(
      'Warmth',
      'That awesome sensation of being warm and good',
      'https://www.tekportal.net/wp-content/uploads/2018/11/warmth.jpg'
    ),
    new Feeling(
      'Cold',
      'That absence of warmth, a feeling that leads to the need to look for a warm place',
      'https://wexnermedical.osu.edu/-/media/images/wexnermedical/blog/2020-stories/01/frostbite-eyes/coldeyessafety_large.jpg?la=en&hash=62E689D9387017C8221BF3594229C366854EACED'
    ),
  ];

  constructor() {}

  onFeelingSelected(feeling: Feeling) {
    this.feelingWasSelected.emit(feeling);
  }

  ngOnInit(): void {}
}
