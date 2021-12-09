import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('#contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() {
    console.log('Constructor Called');
  }

  ngOnInit(): void {
    console.log('ngOnInit Called');
    console.log(
      'Text content OnInit: ' + this.header.nativeElement.textContent
    );
    // console.log(
    //   'Text of Paragraph OnInit: ' + this.paragraph.nativeElement.textContent
    // );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('DoCheck Called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called');
    // console.log(
    //   'Text of Paragraph ContentInit: ' +
    //     this.paragraph.nativeElement.textContent
    // );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Called');
    console.log(
      'Text content AfterView: ' + this.header.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Called');
  }
}

// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
