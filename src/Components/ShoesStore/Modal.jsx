import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let { content } = this.props;
    return (
      <div className='Modal'>
        <h2 className='title-modal'>Chi Tiết Sản Phẩm</h2>
        <hr />
        <img className='img-modal' src={content.image} alt="" />
        <table className='table'>
          <thead>
            <tr>
              <th>Tên sản Phẩm:</th>
              <td>{content.name}</td>
            </tr>
            <tr>
              <th>Giá:</th>
              <td>{content.price}</td>
            </tr>
            <tr>
              <th>Mô tả:</th>
              <td>{content.description}</td>
            </tr>
            <tr>
              <th>Số Lượng:</th>
              <td>{content.quantity}</td>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

