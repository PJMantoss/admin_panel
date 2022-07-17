import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import './productList.css';

function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return(
                <div className='productListProduct'>
P                  <img className='productListImg' src={params.row.img} alt='' />
                    {params.row.name}
                </div>
            )
        } 
        },
        { field: 'stock', headerName: 'Stock', width: 130 },
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
                        <Link to={'/product/'+params.row.id}>
                            <button className='productListEdit'>
                                Edit
                            </button>
                        </Link>
                        <DeleteOutlinedIcon 
                            className='productListDelete' 
                            onClick={() => handleDelete(params.row.id)} 
                        />
                    </>
                )
            }
        },
      ];

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