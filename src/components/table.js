import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import empArr from "./empArr";

const numberOfEmploy = 42;

const branches = [
    "Sales",
    "Accounting",
    "Legal",
    "Marketing",
    "Operations",
    "Human Resources"
]

const columns = [{
  dataField: 'id',
  text: 'Employee ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Employee Name',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'branch',
  text: 'Employee Branch',
  sort: true
}];


const products = [];
 
for (let i = 0; i < numberOfEmploy; i++) {
    products.push({
        id: Math.floor(Math.random()*899999)+100000,
        name: empArr[i],
        branch: branches[Math.floor(Math.random()*6)] 
    })
}

 
export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } filter={ filterFactory() } />