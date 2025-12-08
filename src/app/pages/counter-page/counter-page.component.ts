import { Component, computed, effect, inject, signal } from '@angular/core';
import { values } from 'lodash';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
 counterService = inject(CounterService)
}
