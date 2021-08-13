import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Emotion } from 'src/app/shared/emotion.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('descriptionInput', {static: false}) descriptionInputRef: ElementRef;
  @ViewChild('imageInput', {static: false}) imageInputRef: ElementRef;
  @Output() emotionAdded = new EventEmitter<{ name: string; description: string, imagePath }>();

  constructor() {}

  onAddEmotion() {
    const emotionName = this.nameInputRef.nativeElement.value;
    const emotionDescription = this.descriptionInputRef.nativeElement.value;
    const emotionImage = this.imageInputRef.nativeElement.value;
    const addEmotion = new Emotion(
      emotionName,
      emotionDescription,
      emotionImage
    );
    this.emotionAdded.emit(addEmotion);
  }

  ngOnInit(): void {}
}
