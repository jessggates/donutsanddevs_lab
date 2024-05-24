import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DonutService } from '../../services/donut.service';
import { DonutResponse , Donut } from '../../interfaces/DonutResponse';


@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [DonutService],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent implements OnInit{
  donutResponse: DonutResponse | null = null;
  error: string | null= null;
  
  
  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.getDonuts();
  }

  getDonuts(): void {
    this.donutService.getDonuts().subscribe({
      next: (data: DonutResponse) => {
        this.donutResponse = data;
        this.error = null;
      },
      error: (error) => {
        console.error('Error fetching donuts:', error);
        this.error = 'Failed to fetch donuts. Please try again later.';
      }
    });
  }
}



