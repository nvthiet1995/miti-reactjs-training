import React, { Component } from 'react'
import logo from './../../images/logos/logo-shop-red.png';
import HeaderNav from './HeaderNav';

export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div class="header">
                <div class="container">
                    <a class="site-logo" href="shop-index.html"><img src={logo} alt="Metronic Shop UI"/></a>

                    <a href="javascript:void(0);" class="mobi-toggler"><i class="fa fa-bars"></i></a>

                    <div class="top-cart-block">
                        <div class="top-cart-info">
                            <a href="javascript:void(0);" class="top-cart-info-count">3 items</a>
                            <a href="javascript:void(0);" class="top-cart-info-value">$1260</a>
                        </div>
                        <i class="fa fa-shopping-cart"></i>

                        <div class="top-cart-content-wrapper">
                            <div class="top-cart-content">
                                <ul class="scroller" style={{height: "250px"}}>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                    <li>
                                        <a href="shop-item.html"></a>
                                        <span class="cart-content-count">x 1</span>
                                        <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                                        <em>$1230</em>
                                        <a href="javascript:void(0);" class="del-goods">&nbsp;</a>
                                    </li>
                                </ul>
                                <div class="text-right">
                                    <a href="shop-shopping-cart.html" class="btn btn-default">View Cart</a>
                                    <a href="shop-checkout.html" class="btn btn-primary">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <HeaderNav></HeaderNav>
                </div>
            </div>
        )
    }
}

export default Header
