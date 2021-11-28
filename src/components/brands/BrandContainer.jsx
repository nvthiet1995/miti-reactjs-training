import React, { Component } from 'react';

import brand1 from './../../images/brands/canon.jpg';

export class BrandContainer extends Component {

    render() {
        return (
            <div class="brands">
                <div class="container">
                    <div class="owl-carousel owl-carousel6-brands">
                        <a href="shop-product-list.html"><img src={brand1} alt="canon" title="canon"/></a>
                        <a href="shop-product-list.html"><img src={brand1} alt="esprit" title="esprit"/></a>
                        <a href="shop-product-list.html"><img src={brand1} alt="gap" title="gap"/></a>
                        <a href="shop-product-list.html"><img src={brand1} alt="next" title="next"/></a>
                        <a href="shop-product-list.html"><img src={brand1} alt="puma" title="puma"/></a>
                        <a href="shop-product-list.html"><img src={brand1} alt="zara" title="zara"/></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandContainer
