import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { HalloffameService } from '../../services/halloffame.service';  
import { HallOfFameResponse } from '../../interfaces/HallOfFameResponse'; 
import { FamousPerson } from '../../interfaces/HallOfFameResponse';

@Component({
  selector: 'app-famouspeople',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [HalloffameService],
  templateUrl: './famouspeople.component.html',
  styleUrl: './famouspeople.component.css'
})
export class FamouspeopleComponent {
  hallOfFameResponse: HallOfFameResponse | null = null;
  famousPerson: FamousPerson | null = null;


  constructor(private hallOfFameService: HalloffameService) {}

  
}
