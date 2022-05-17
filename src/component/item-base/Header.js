import React from "react";
import { BrowserRouter, Switch, Router, Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header logged-out">
        <div className="header-actions header-actions-full">
          <a
            href="https://odindesignthemes.com/vikinger-theme/"
            className="header-brand"
          >
            <div className="logo">
              <img
                className="logo-image"
                src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/cropped-logovikinger.png"
                alt="logo"
              />
            </div>

            <h1 className="header-brand-text">Vikinger</h1>
          </a>

          <div className="sidemenu-trigger navigation-widget-trigger">
            <svg className="icon-grid ">
              <use href="#svg-grid"></use>
            </svg>
          </div>

          <div className="mobilemenu-trigger navigation-widget-mobile-trigger">
            <div className="burger-icon inverted">
              <div className="burger-icon-bar"></div>

              <div className="burger-icon-bar"></div>

              <div className="burger-icon-bar"></div>
            </div>
          </div>

          <nav className="navigation">
            <ul className="menu-main">
              <li className="menu-main-item">
                <a className="menu-main-item-link" href="./profile.html">
                  VTTP Charity
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-actions search-bar">
          <div id="vk-search-form"></div>
        </div>

        <div className="header-actions">
          <div className="action-list action-list-small action-list-mobile dark">
            <a
              className="action-list-item"
              href="https://odindesignthemes.com/vikinger-theme/cart/"
            >
              <div className="action-list-item-icon-wrap ">
                <svg className="icon-shopping-bag action-list-item-icon">
                  <use href="#svg-shopping-bag"></use>
                </svg>
              </div>
            </a>

            <div className="action-list-item-wrap">
              <div className="action-list-item header-search-push-open">
                <svg className="icon-magnifying-glass action-list-item-icon">
                  <use href="#svg-magnifying-glass"></use>
                </svg>
              </div>

              <div className="action-list-item action-list-item-hidden header-search-push-close">
                <svg className="icon-cross-thin action-list-item-icon">
                  <use href="#svg-cross-thin"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="header-actions">
          <div className="header-cart">
            <div className="action-list dark">
              <div className="action-list-item-wrap">
                <div className="action-list-item header-settings-dropdown-trigger">
                  <div className="action-list-item-icon-wrap vikinger-wc-cart-icon-wrap ">
                    <svg className="icon-shopping-bag action-list-item-icon">
                      <use href="#svg-shopping-bag"></use>
                    </svg>
                  </div>
                </div>

                <div className="dropdown-box no-padding-bottom header-settings-dropdown">
                  <div className="dropdown-box-header vikinger-wc-cart-header-title">
                    <p className="dropdown-box-header-title">
                      Shopping Cart <span className="highlighted">0</span>
                    </p>
                  </div>

                  <div
                    className="dropdown-box-list scroll-small vikinger-wc-minicart"
                    data-simplebar
                  >
                    <p className="woocommerce-mini-cart__empty-message">
                      No products in the cart.
                    </p>
                  </div>

                  <div className="cart-preview-total vikinger-wc-cart-preview-total">
                    <p className="cart-preview-total-title">Total:</p>
                    <p className="cart-preview-total-text">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            &#36;
                          </span>
                          &nbsp;0.00
                        </bdi>
                      </span>
                    </p>
                  </div>

                  <div className="dropdown-box-actions">
                    <div className="dropdown-box-action">
                      <a
                        className="button secondary"
                        href="https://odindesignthemes.com/vikinger-theme/cart/"
                      >
                        Shopping Cart
                      </a>
                    </div>

                    <div className="dropdown-box-action">
                      <a
                        className="button primary"
                        href="https://odindesignthemes.com/vikinger-theme/checkout/"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <a className="button primary login-button" href="https://odindesignthemes.com/vikinger-theme/wp-login.php">Login</a> */}
          <Link to="/signinup" className="button primary login-button" /> Login
        </div>
      </header>
    </>
  );
}
