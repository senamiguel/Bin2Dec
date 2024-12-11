import { Component } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConverterComponent],
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
