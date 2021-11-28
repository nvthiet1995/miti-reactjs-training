import React, { Component } from 'react'

export class PreFooterContainer extends Component {

    render() {
        return (
            <div class="pre-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 pre-footer-col">
                            <h2>About us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip  commodo consequat. </p>
                            <p>Duis autem vel eum iriure dolor vulputate velit esse molestie at dolore.</p>
                        </div>
                        <div class="col-md-3 col-sm-6 pre-footer-col">
                            <h2>Information</h2>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Delivery Information</a></li>
                                <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Customer Service</a></li>
                                <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Order Tracking</a></li>
                                <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Shipping &amp; Returns</a></li>
                                <li><i class="fa fa-angle-right"></i> <a href="contacts.html">Contact Us</a></li>
                                <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Careers</a></li>
                                <li><i class="fa fa-angle-right"></i> <a href="javascript:;">Payment Methods</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 pre-footer-col">
                            <h2 class="margin-bottom-0">Latest Tweets</h2>
                            <a class="twitter-timeline" href="https://twitter.com/twitterapi" data-tweet-limit="2" data-theme="dark" data-link-color="#57C8EB" data-widget-id="455411516829736961" data-chrome="noheader nofooter noscrollbar noborders transparent">Loading tweets by @keenthemes...</a>
                        </div>

                        <div class="col-md-3 col-sm-6 pre-footer-col">
                            <h2>Our Contacts</h2>

                            <div class="row">
                                <div class="col-md-6 col-sm-6">
                                    <ul class="social-icons">
                                        <li><a class="rss" data-original-title="rss" href="javascript:;"></a></li>
                                        <li><a class="facebook" data-original-title="facebook" href="javascript:;"></a></li>
                                        <li><a class="twitter" data-original-title="twitter" href="javascript:;"></a></li>
                                        <li><a class="googleplus" data-original-title="googleplus" href="javascript:;"></a></li>
                                        <li><a class="linkedin" data-original-title="linkedin" href="javascript:;"></a></li>
                                        <li><a class="youtube" data-original-title="youtube" href="javascript:;"></a></li>
                                        <li><a class="vimeo" data-original-title="vimeo" href="javascript:;"></a></li>
                                        <li><a class="skype" data-original-title="skype" href="javascript:;"></a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <div class="pre-footer-subscribe-box pull-right">
                                        <h2>Newsletter</h2>
                                        <form action="#">
                                            <div class="input-group">
                                                <input type="text" placeholder="youremail@mail.com" class="form-control" />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-primary" type="submit">Subscribe</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreFooterContainer
