import React, { Component } from 'react'

const dataShoes = [
    {"id": 1, "name": "Adidas Prophere", "alias": "adidas-prophere", "price": 350, "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n", "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n", "quantity": 995, "image": "http://svcy3.myclass.vn/images/adidas-prophere.png" },

    {"id": 2, "name": "Adidas Prophere Black White", "alias": "adidas-prophere-black-white", "price": 450, "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n", "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n", "quantity": 990, "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"},

    {"id": 3, "name": "Adidas Prophere Customize", "alias": "adidas-prophere-customize", "price": 375, "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n", "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n", "quantity": 415, "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"},
]



export default class ProductItem extends Component {
  render() {
    return (
        <div className='card'>
            <img src="http://svcy3.myclass.vn/images/adidas-prophere.png" alt="" />
        <div className='card-body'>
            <h3>Adidas Prophere</h3>
            <p>{phone.giaBan.toLocaleString()} VND</p>
            <button className='btn btn-success' onClick={() => {
                xemChiTiet(phone)
            }}>Xem chi tiết</button>

           <ButtonThemGioHang themGioHang={themGioHang} phone={phone}></ButtonThemGioHang>
        </div>
    </div>
    )
  }
}


class ButtonThemGioHang extends Component {

    render() {
        return (
            <button className='btn btn-dark mx-2' onClick={()=>{
                this.props.themGioHang(this.props.phone);
            }}><i className='fa fa-cart-plus'></i> Thêm giỏ hàng</button>
        )
    }
}