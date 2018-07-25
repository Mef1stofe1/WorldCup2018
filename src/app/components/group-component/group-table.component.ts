import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { Group } from '../../models/group-model';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.css']
})

export class GroupTableComponent implements OnInit {

  constructor(public manager: ManagerService) { }

  tableHeaders: string[];

  ngOnInit() {
    this.tableHeaders = this.manager.formGroupTableHeaders();
     this.manager.loadGroupStageStandings();
  }
}
