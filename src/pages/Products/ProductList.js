import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import './productList.css';

function ProductList() {
  return (
    <div className='productList'>
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

export default ProductList;