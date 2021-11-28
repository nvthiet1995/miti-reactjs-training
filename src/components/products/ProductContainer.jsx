import React, { Component } from 'react'

import model1 from './../../images/products/model1.jpg';
import model2 from './../../images/products/model2.jpg';
import model3 from './../../images/products/model3.jpg';
import model4 from './../../images/products/model4.jpg';

import k2 from './../../images/products/k2.jpg';
import k1 from './../../images/products/k1.jpg';
import k3 from './../../images/products/k3.jpg';

import slide1 from './../../images/index-sliders/slide1.jpg';

export class ProductContainer extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div class="main">
                <div class="container">
                    <div class="row margin-bottom-40">
                        <div class="col-md-12 sale-product">
                            <h2>New Arrivals</h2>
                            <div class="new-arrivals">
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={model1} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/model1.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                        <div class="sticker sticker-sale"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={model2} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/model2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={model3} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/model6.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={model4} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/model4.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="javascript:;">Berry Lace Dress4</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                        <div class="sticker sticker-new"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row margin-bottom-40 ">
                        <div class="sidebar col-md-3 col-sm-4">
                            <ul class="list-group margin-bottom-25 sidebar-menu">
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Ladies</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Mens</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Kids</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Accessories</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Sports</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Brands</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Electronics</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Home & Garden</a></li>
                                <li class="list-group-item clearfix"><a href="shop-product-list.html"><i class="fa fa-angle-right"></i> Custom Link</a></li>
                            </ul>
                        </div>
                        <div class="col-md-9 col-sm-8">
                            <h2>Three items</h2>
                            <div class="owl-carousel owl-carousel3">
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={k1} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/k1.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                        <div class="sticker sticker-new"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={k2} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/k2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={k3} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/k3.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row margin-bottom-35 ">
                        <div class="col-md-6 two-items-bottom-items">
                            <h2>Two items</h2>
                            <div class="owl-carousel owl-carousel2">
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={k3} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/k4.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                                <div>
                                    <div class="product-item">
                                        <div class="pi-img-wrapper">
                                            <img src={k2} class="img-responsive" alt="Berry Lace Dress" />
                                            <div>
                                                <a href="assets/pages/img/products/k2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                                                <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                                            </div>
                                        </div>
                                        <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                                        <div class="pi-price">$29.00</div>
                                        <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 shop-index-carousel">
                            <div class="content-slider">
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <img src={slide1} class="img-responsive" alt="Berry Lace Dress" />
                                        </div>
                                        <div class="item">
                                            <img src={slide1} class="img-responsive" alt="Berry Lace Dress" />
                                        </div>
                                        <div class="item">
                                            <img src={slide1} class="img-responsive" alt="Berry Lace Dress" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductContainer
