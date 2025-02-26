import { Routes } from "@angular/router";
import { AllOrdersComponent } from "./all-orders/all-orders.component";
import { OrderProcessingComponent } from "./order-processing/order-processing.component";
import { ShippedOrdersComponent } from "./shipped-orders/shipped-orders.component";
import { CancelledOrdersComponent } from "./cancelled-orders/cancelled-orders.component";
import { DeliveredOrdersComponent } from "./delivered-orders/delivered-orders.component";
import { ReturnRefundsComponent } from "./return-refunds/return-refunds.component";
import { AnalyticsReportsComponent } from "./analytics-reports/analytics-reports.component";

export const ORDER_MANAGEMENT_ROUTES: Routes = [
    { path: 'all', component: AllOrdersComponent },
    { path: 'processing', component: OrderProcessingComponent },
    { path: 'shipped', component: ShippedOrdersComponent },
    { path: 'delivered', component: DeliveredOrdersComponent },
    { path: 'return-refunds', component: ReturnRefundsComponent },
    { path: 'cancelled', component: CancelledOrdersComponent },
    { path: 'analytics-reports', component: AnalyticsReportsComponent },
  ];