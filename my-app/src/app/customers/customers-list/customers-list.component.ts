import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit ,  OnChanges{

    //To store the original Customer array
    private _customers: ICustomer[] = [];
    filteredCustomers : ICustomer[] = [];
    customersOrderTotal : number;
    currencyCode : string = 'USD';
    constructor() { }

    ngOnInit(): void { }

    calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
        this.customersOrderTotal += cust.orderTotal;
    });
    }

    sort(prop) {
    //A sorting service will handle the sorting

    }

    //Without using ngOnChange we can use getters and settes to create an input property 'customers'
    @Input() get customers(): ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    //to see how ngOnChange works.
    @Input() firstParentInput: number;
    @Input() secondParentInput: number;
    change1FromChild() {
    this.firstParentInput -= 1;
    }
    change2FromChild() {
    this.secondParentInput -= 1;
    }
    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (changes.hasOwnProperty(propName)) {
            let change = changes[propName];
            switch (propName) {
                case 'firstParentInput': {
                console.log(`firstParentInput changed to:`, change.currentValue);
                break;
                }
                case 'secondParentInput': {
                console.log(`secondParentInput changed to:`, change.currentValue);
                break;
                }
            }
            }
        }
    }
}
