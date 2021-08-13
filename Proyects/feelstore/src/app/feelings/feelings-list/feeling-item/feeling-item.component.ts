import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Feeling } from '../../feeling.model';


@Component({
  selector: 'app-feeling-item',
  templateUrl: './feeling-item.component.html',
  styleUrls: ['./feeling-item.component.css'],
})
export class FeelingItemComponent implements OnInit {
  constructor() {}
 
  @Input() feeling: Feeling;
  @Output() feelingSelected = new EventEmitter<void>();
  
  onSelected(){
    this.feelingSelected.emit();
  }

  ngOnInit(): void {}
}
