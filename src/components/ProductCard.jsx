import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    return (
      <div>
        <div className="bg-light w-25 p-3 border border-2 rounded">
          <div>
            <img
              className="mh-25 w-100 d-inline-block"
              src="https://picsum.photos/200"
              alt="random image"
            />
            <div className="text-center">
              <div className="d-flex justify-content-between m-3">
                <span>نام محصول</span>
                <span>لپتاپ ایسوس </span>
              </div>
              <div>
                <h4>توضیحات</h4>
              </div>
              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و
              </div>
              <div className="d-flex justify-content-between m-4">
                <span>قیمت</span>
                <span> 12,200,000 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
