import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-uiheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uiheader.component.html',
  styleUrls: ['./uiheader.component.css']
})
export class UIHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
