import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppElement } from 'src/app/shared/element.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  element: AppElement;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id: number = +params.id;
      this.element = this.dataService.elements.find((el: AppElement) => {
        return el.id === id;
      });
    });
  }

}
