import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DonutsComponent } from './components/donuts/donuts.component';
import { FamouspeopleComponent } from './components/famouspeople/famouspeople.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DonutsComponent,FamouspeopleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'donutsanddevs_lab';
}
