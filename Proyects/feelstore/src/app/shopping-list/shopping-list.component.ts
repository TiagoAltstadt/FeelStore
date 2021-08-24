import { Component, OnInit } from '@angular/core';
import { Emotion } from '../shared/emotion.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  emotions: Emotion[] = [
    new Emotion(
      'Joy',
      'When you feel good af',
      'https://images.squarespace-cdn.com/content/v1/5dfcefe1f28c1134568dbd9d/1583180231709-XVTRXBGCY5SP5RIY8J05/image-asset.png?format=1000w'
    ),
    new Emotion(
      'Anger',
      'When you feel good af',
      'https://images.squarespace-cdn.com/content/v1/5dfcefe1f28c1134568dbd9d/1583180231709-XVTRXBGCY5SP5RIY8J05/image-asset.png?format=1000w'
    ),
  ];

  constructor() {}
  
  ngOnInit(): void {}

  onEmotionAdded(emotion: Emotion){
    console.log(emotion);
    
    this.emotions.push(emotion);
  }

}
