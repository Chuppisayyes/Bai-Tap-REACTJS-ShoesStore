import React, { Component } from 'react'
import data from '../../data.json'
import ProductList from './ProductList'
import Modal from './Modal'
import ProductItem from "./ProductItem";


export default class ShoesStore extends Component {
  state = {
    productDetail: {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "https://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
  };
  setStateModal = (item) => {
    this.setState({
      productDetail: item,
    });
  };

  render() {
    return (
      <div className='pt-4'>
        <div className='bg-success rounded p-3'>
          <h3 className='text-center text-white'>SHOES STORE</h3>
        </div>
        <div className='body mx-5'>
          <hr />
          <div className="row mt-5">
            <div className="col-8">
              <ProductList setStateModal={this.setStateModal} productData={data}  />
            </div>
            <div className="col-4">
              <Modal content={this.state.productDetail} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
