import { Component, OnInit } from '@angular/core';
import { AppElement } from 'src/app/shared/element.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {


  constructor(public data: DataService) { }

  ngOnInit(): void {}

}
