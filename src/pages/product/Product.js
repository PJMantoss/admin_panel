import React from 'react';
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import {productData} from '../../dummyData';
import './product.css';

function Product() {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to='newproduct'>
                <button className='productAddBtn'>
                    Create
                </button>
            </Link>
        </div>
        <div className='productTop'>
            <div className='productTopLeft'>
                <Chart 
                    data={productData} 
                    title='Sales Performance' 
                    dataKey='Sales' 
                />
            </div>
            <div className='productTopRight'>
                <div className='productInfoTop'>
                    <img 
                        src='https://i.ibb.co/G5P4rj2/Men-Green-Leather-Biker-Jacket.jpg' 
                        alt='green jacket' 
                        className='productImg' 
                    />
                    <span className='productName'>Green Jacket</span>
                </div>
                <div className='productInfoBottom'>
                    <div className='productInfoItem'>
                        <span className='productInfoItem'></span>
                    </div>
                </div>
            </div>
        </div>
        <div className='productBottom'></div>
    </div>
  )
}

export default Product