import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card--image">
          <img
            className="mw-100"
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
            alt="random"
          />
        </div>
        <div className="card--name">
          <div className="card--name">نام محصول</div>
          <div className="card--name">لورم ایپسوم متن </div>
        </div>
        <div>
          <h5 className="card--name">توضیحات</h5>
          <div className="card--name--details">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که{" "}
          </div>
        </div>
        <div className="card--price">
          <div>قیمت</div>
          <div>2,220,000</div>
        </div>
      </div>
    );
  }
}
