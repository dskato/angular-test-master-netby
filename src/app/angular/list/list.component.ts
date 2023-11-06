import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  swList: any = [];

  constructor(private swService: StarwarsService) { }

  ngOnInit(): void {

    this.swList = this.swService.getList()
    console.log(this.swList)
  }

}
