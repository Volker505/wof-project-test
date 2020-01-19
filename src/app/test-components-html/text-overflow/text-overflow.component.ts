import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  templateUrl: './text-overflow.component.html',
  styleUrls: ['./text-overflow.component.less']
})
export class TextOverflowComponent implements OnInit, AfterViewInit {

  @Input() text: string;
  @ViewChild('textItem') textBlock: ElementRef;
  viewStyle = {
    'max-height': '30px'
  };
  newHeight: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const a = this.textBlock.nativeElement;
    this.newHeight = a.scrollHeight;
    console.log(1111, a.scrollHeight);
  }

  add() {
    this.viewStyle = {
      'max-height': `${this.newHeight}px`
    }
  }

}
