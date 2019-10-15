import { Component, OnInit, ViewChild } from '@angular/core';
import { TenantService } from '../tenant.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Tenant } from '../tenant.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

  tenantList;
  dataSource;
  columnsToDisplay: string[] = ['firstName', 'lastName', 'phone', 'familyMembers', 'address', 'streetAddress', 'streetAddressLine2'
                               , 'city', 'state', 'postal', 'country'];

  constructor(private tenantService: TenantService) {
    // Subscribe to the readonly tenantList of the TenantService.
    this.tenantService.tenantList.subscribe( updatedTenantList => {
      this.tenantList = updatedTenantList;
    });

  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.tenantService.getTenantList();
  }

}
