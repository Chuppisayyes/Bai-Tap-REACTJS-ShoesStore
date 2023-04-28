import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    //Lấy giá trị từ props name từ component cha truyền vào
    let {prodInfo} = this.props;

    return (
      <div className='card prod-item'>
        <img src={prodInfo.image} alt='...' />
        <hr />
        <div className='card-body item-body'>
            <h3 className='name'>{prodInfo.name}</h3>
            <p className='short-description'>{prodInfo.shortDescription}</p>
            <p className='price'>{prodInfo.price}$</p>
            <div className="btn-flex">
              <button className='btn btn-warning'>
                  Thêm giỏ hàng <i className='fa fa-cart-plus'></i>
              </button>
              <button className='btn btn-success'  onClick={() => {this.props.setStateModal(prodInfo);
            }}> Xem chi tiết
              </button>
            </div>
        </div>
      </div>
    )
  }
}