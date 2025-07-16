import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  forwardRef,
  input,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, forwardRef(() => AppTestComponent)],
  // templateUrl: './app.component.html',
  template: `
    <h1>{{ title }}</h1>
    <app-test [title]="3"></app-test>
    <my-element></my-element>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'angular-wc-test';
}

@Component({
  selector: 'app-test',
  imports: [RouterOutlet],
  template: `
    <h1>{{ title }}</h1>
    <p>{{ value }}</p>
  `,
  styleUrl: './app.component.css',
})
export class AppTestComponent {
  title = 'angular-wc-test';
  value = input.required<number>();
}
