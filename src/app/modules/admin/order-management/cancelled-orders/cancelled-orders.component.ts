import { Component, inject } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../libs/components/utilities/breadcrumbs/breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { ClientAgGridDatatableComponent } from '../../../../libs/components/tables/client-ag-grid-datatable/client-ag-grid-datatable.component';
import { ColDef } from 'ag-grid-community';
import { MockDataService } from '../../../../libs/services/mock-data.service';

@Component({
  selector: 'app-cancelled-orders',
  standalone: true,
  imports: [BreadcrumbsComponent, CommonModule, ClientAgGridDatatableComponent],
  templateUrl: './cancelled-orders.component.html',
  styleUrl: './cancelled-orders.component.scss'
})
export class CancelledOrdersComponent {
    public rows: any[] = [];
    public columnDefs: ColDef[] = [
        { field: 'id', headerName: 'Order ID', sortable: true, filter: true },
        { field: 'customerName', headerName: 'Customer Name', sortable: true, filter: true },
        { field: 'date', headerName: 'Date & Time', sortable: true, filter: true },
        { field: 'totalAmount', headerName: 'Total Amount', sortable: true, filter: true },
        { field: 'shippingMethod', headerName: 'Shipping Method', sortable: true, filter: true },
        { field: 'status', headerName: 'Status', sortable: true, filter: true },
        { field: 'date', headerName: 'Created At', sortable: true, filter: true },
        { field: 'actions', headerName: 'Actions', sortable: true, filter: true },
    ];
    private __mockDataService = inject(MockDataService);

    constructor() {
        this.rows = this.__mockDataService.generateRowData(this.columnDefs, 200);
        console.log(' this.rowData', this.rows)
    }
}
