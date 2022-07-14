import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './userList.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { 
        id: 1, 
        username: 'Jon Snow', 
        avatar: 'https://i.ibb.co/jHcM2gw/yellow-men-s-tshirt.jpg', 
        email: 'jon@gmail.com',
        status: 'active',
        transaction: '$230' 
    },
  ];

function UserList() {
  return (
    <div className='userList'>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}

export default UserList;