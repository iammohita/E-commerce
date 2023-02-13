import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    return (
      <div className="d-flex flex-column w-25  m-4 border border-dark p-3">
        <div className="mw-100 text-center">
          <img src="https://picsum.photos/400" alt="random" />
        </div>
        <div className="d-flex justify-content-between mt-2 mb-3">
          <div>نام محصول</div>
          <div>لورم ایپسوم متن ساختگی با </div>
        </div>
        <div>
          <h5 className="text-right">توضیحات</h5>
          <div>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که{" "}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div>قیمت</div>
          <div>2,220,000</div>
        </div>
      </div>
    );
  }
}
