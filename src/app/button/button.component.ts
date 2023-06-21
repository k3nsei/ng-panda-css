import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import {
  type ButtonColor,
  buttonRecipe,
  type ButtonSize,
} from './button.component.css';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ButtonComponent {
  @Input() public color: ButtonColor = 'primary';

  @Input() public size: ButtonSize = 'md';

  @Input() public type: HTMLButtonElement['type'] = 'button';

  @Input() public disabled: boolean = false;

  public get classname(): string {
    return buttonRecipe({
      color: this.disabled ? 'disabled' : this.color,
      size: this.size,
    });
  }
}
