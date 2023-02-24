import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
    <div className="bg-light w-100 p-3 border border-2 rounded">
      <div>
        <img
          className="mh-100 w-100 d-inline-block"
          src={props.image}
          alt="random image"
        />
        <div className="text-center">
          <div className="d-flex justify-content-between m-3">
            <span>نام محصول</span>
            <span>{props.title} </span>
          </div>
          <div>
            <h4>توضیحات</h4>
          </div>
          <div>
            {props.description}
          </div>
          <div className="d-flex justify-content-between m-4">
            <span>قیمت</span>
            <span> {props.price} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCard

