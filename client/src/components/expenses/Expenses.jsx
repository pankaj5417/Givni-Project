import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './expenses.css'
import { Button } from '@mui/material';
import { FaAngleDoubleLeft, FaFilter, FaRegChartBar } from 'react-icons/fa';
const columns = [
  { field: 'category', headerName: 'Category', width: 170,  },
  { field: 'amount', headerName: 'Amount', width: 100 },
  { field: 'name', headerName: 'Name', width: 200 },
  {
    field: 'expensereceipt',
    headerName: 'Expense Receipt',
    type: '',
    width: 150,
  },
  { field: 'date', headerName: 'Date', width: 100 },
  { field: 'project', headerName: 'Project', width: 130 },
  { field: 'customer', headerName: 'Customer', width: 140 },
  { field: 'invoice', headerName: 'Invoice', width: 80 },
  { field: 'reference', headerName: 'Reference #', width: 120 },
  { field: 'paymentmode', headerName: 'Payment Mode', width: 100 },

  
];

const rows = [
    {id:0,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:1,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:2,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:3,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:4,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:5,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:6,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:7,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:9,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:10,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:11,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:12,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:13,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},
    {id:14,category:'Automobile Expense',amount:'$359.10',name:"Multi-tiered executive firmware",expensereceipt:"",date:"2022-08-20",project:"Brochure Design",customer:"Conn-Bogan",invoice:"",reference:"225",paymentmode:"Bank"},

];

export default function Expenses() {
  return (
    <>
    <div className='expenses'>
        <div className='expensesTop'>
            <ul style={{marginLeft:"0px"}}>
                <li>
                    <Button variant='contained' style={{marginLeft:"0px !important"}} >RECORD EXPENSES</Button>&nbsp;
                    <Button variant='contained' color='primary'>IMPORT EXPENSES</Button>
                </li>
            </ul>
            <ul>
                <li>
                <FaAngleDoubleLeft style={{background:"#f6f8fa",padding:"12px",borderRadius:"3px"}}/>&nbsp;
                <FaRegChartBar  style={{background:"#f6f8fa",padding:"12px",borderRadius:"3px"}}/>&nbsp;
                <FaFilter  style={{background:"#f6f8fa",padding:"12px",borderRadius:"3px"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
            </ul>
        </div>
    <div className='expenseGridContainer'>
      <DataGrid
        rows={rows}
        columns={columns}
       
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

    </div>
    
    </>
  );
}
