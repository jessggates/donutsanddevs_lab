import { Component, OnInit } from '@angular/core';
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
export class FamouspeopleComponent implements OnInit{
  hallOfFameResponse: HallOfFameResponse | null = null;
  error: string | null= null;
  famousPerson: FamousPerson | null = null;


  constructor(private hallOfFameService: HalloffameService) {}
  
    ngOnInit(): void {
      this.getHallOfFamers();
    }
  
    getHallOfFamers(): void {
      this.hallOfFameService.getHallOfFamers().subscribe({
        next: (data: HallOfFameResponse) => {
          this.hallOfFameResponse = data;
          this.error = null;
        },
        error: (error) => {
          console.error('Error fetching famous people:', error);
          this.error = 'Failed to fetch famous people. Please try again later.';
        }
      });
    }
}
