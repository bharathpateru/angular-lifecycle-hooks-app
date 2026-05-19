import { 
Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements 
OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
 {

  @Input() message: string = '';

  constructor() {
    console.log('1. Constructor called');
   }

  
ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges called', changes);
  }

  ngOnInit(): void {
    console.log('3. ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('5. ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('6. ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('7. ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('8. ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('9. ngOnDestroy called');
  }


}
