import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent } from './button';
import { stack } from './app.component.css';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, ButtonComponent],
})
export class AppComponent {
  public readonly stackClassname: string = stack;
}
