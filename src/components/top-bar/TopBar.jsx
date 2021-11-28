import React, { Component } from 'react';

export class TopBar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div class="pre-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 additional-shop-info">
                            <ul class="list-unstyled list-inline">
                                <li><i class="fa fa-phone"></i><span>+1 456 6717</span></li>
                                <li class="shop-currencies">
                                    <a href="javascript:void(0);">€</a>
                                    <a href="javascript:void(0);">£</a>
                                    <a href="javascript:void(0);" class="current">$</a>
                                </li>
                                <li class="langs-block">
                                    <a href="javascript:void(0);" class="current">English </a>
                                    <div class="langs-block-others-wrapper"><div class="langs-block-others">
                                        <a href="javascript:void(0);">French</a>
                                        <a href="javascript:void(0);">Germany</a>
                                        <a href="javascript:void(0);">Turkish</a>
                                    </div></div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-6 additional-nav">
                            <ul class="list-unstyled list-inline pull-right">
                                <li><a href="shop-account.html">My Account</a></li>
                                <li><a href="shop-wishlist.html">My Wishlist</a></li>
                                <li><a href="shop-checkout.html">Checkout</a></li>
                                <li><a href="page-login.html">Log In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar
