import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './userList.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return(
            <div className='userListUser'>
                <img className='userListImg' src={params.row.avatar} alt='' />
                {params.row.username}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
        field: 'transaction',
        headerName: 'Transaction Volume',
        width: 150,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return(
                <>
                    <button className='userListEdit'>Edit</button>
                    <DeleteOutlinedIcon className='userListDelete' />
                </>
            )
        }
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
            disableSelectionOnClick
        />
    </div>
  )
}

export default UserList;