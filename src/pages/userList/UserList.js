import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
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
                    <Link to={'/user/'+params.row.id}>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutlinedIcon className='userListDelete' />
                </>
            )
        }
    },
  ];

function UserList() {
    const [data, setData] = useState(userRows);
  return (
    <div className='userList'>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
  )
}

export default UserList;