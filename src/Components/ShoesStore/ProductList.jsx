import React, { Component } from 'react'
import ProductItem from './ProductItem'
export default class ProductList extends Component {
  
  renderProduct = (data) =>{
        let  arrProduct = data.map((item) => {
              return <div className='col-4 mt-2' key={item.id}>
                  <ProductItem prodInfo={item} setStateModal={this.props.setStateModal}/>
              </div>
      });
      return arrProduct;
  }

  render() {
    let { productData} = this.props;
    return (
      <div className='container prod-list'>
        <h2 className='title-list'>Product List</h2>
        <div className='row'>
          {this.renderProduct(productData)};
        </div>
      </div>
    )
  }
}
