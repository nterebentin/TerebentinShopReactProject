import {Link} from "react-router-dom";

function Header() {
    return (
  <>
  {/* BEGIN HEADER */}
  <div className="page-header">
    {/* BEGIN HEADER TOP */}
    <div className="page-header-top">
      <div className="container">
        {/* BEGIN LOGO */}
        <div className="page-logo">
          <Link to="index.html">
            <img
              src="assets/admin/layout3/img/logo-terebentin.png" width={100} height
              alt="logo"
              className="logo-default"
            />
          </Link>
        </div>
        {/* END LOGO */}
        {/* BEGIN RESPONSIVE MENU TOGGLER */}
        <Link to="javascript:;" className="menu-toggler" />
        {/* END RESPONSIVE MENU TOGGLER */}
        {/* BEGIN TOP NAVIGATION MENU */}
        <div className="top-menu">
          <ul className="nav navbar-nav pull-right">
            {/* BEGIN NOTIFICATION DROPDOWN */}
            <li
              className="dropdown dropdown-extended dropdown-dark dropdown-notification"
              id="header_notification_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="icon-bell" />
                <span className="badge badge-default">7</span>
              </a>
              <ul className="dropdown-menu">
                <li className="external">
                  <h3>
                    You have <strong>12 pending</strong> tasks
                  </h3>
                  <Link to="javascript:;">view all</Link>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ height: 250 }}
                    data-handle-color="#637283"
                  >
                    <li>
                      <Link to="javascript:;">
                        <span className="time">just now</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-success">
                            <i className="fa fa-plus" />
                          </span>
                          New user registered.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">3 mins</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          Server #12 overloaded.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">10 mins</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-warning">
                            <i className="fa fa-bell-o" />
                          </span>
                          Server #2 not responding.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">14 hrs</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-info">
                            <i className="fa fa-bullhorn" />
                          </span>
                          Application error.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">2 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          Database overloaded 68%.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">3 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          A user IP blocked.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">4 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-warning">
                            <i className="fa fa-bell-o" />
                          </span>
                          Storage Server #4 not responding dfdfdfd.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">5 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-info">
                            <i className="fa fa-bullhorn" />
                          </span>
                          System Error.{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="time">9 days</span>
                        <span className="details">
                          <span className="label label-sm label-icon label-danger">
                            <i className="fa fa-bolt" />
                          </span>
                          Storage server failed.{" "}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* END NOTIFICATION DROPDOWN */}
            {/* BEGIN TODO DROPDOWN */}
            <li
              className="dropdown dropdown-extended dropdown-dark dropdown-tasks"
              id="header_task_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="icon-calendar" />
                <span className="badge badge-default">3</span>
              </a>
              <ul className="dropdown-menu extended tasks">
                <li className="external">
                  <h3>
                    You have <strong>12 pending</strong> tasks
                  </h3>
                  <Link to="javascript:;">view all</Link>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ height: 275 }}
                    data-handle-color="#637283"
                  >
                    <li>
                      <Link to="javascript:;">
                        <span className="task">
                          <span className="desc">New release v1.2 </span>
                          <span className="percent">30%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "40%" }}
                            className="progress-bar progress-bar-success"
                            aria-valuenow={40}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">40% Complete</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="task">
                          <span className="desc">Application deployment</span>
                          <span className="percent">65%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "65%" }}
                            className="progress-bar progress-bar-danger"
                            aria-valuenow={65}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">65% Complete</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="task">
                          <span className="desc">Mobile app release</span>
                          <span className="percent">98%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "98%" }}
                            className="progress-bar progress-bar-success"
                            aria-valuenow={98}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">98% Complete</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="task">
                          <span className="desc">Database migration</span>
                          <span className="percent">10%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "10%" }}
                            className="progress-bar progress-bar-warning"
                            aria-valuenow={10}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">10% Complete</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="task">
                          <span className="desc">Web server upgrade</span>
                          <span className="percent">58%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "58%" }}
                            className="progress-bar progress-bar-info"
                            aria-valuenow={58}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">58% Complete</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="task">
                          <span className="desc">Mobile development</span>
                          <span className="percent">85%</span>
                        </span>
                        <span className="progress">
                          <span
                            style={{ width: "85%" }}
                            className="progress-bar progress-bar-success"
                            aria-valuenow={85}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">85% Complete</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="javascript:;">
                        <span className="task">
                          <span className="desc">New UI release</span>
                          <span className="percent">38%</span>
                        </span>
                        <span className="progress progress-striped">
                          <span
                            style={{ width: "38%" }}
                            className="progress-bar progress-bar-important"
                            aria-valuenow={18}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <span className="sr-only">38% Complete</span>
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* END TODO DROPDOWN */}
            <li className="droddown dropdown-separator">
              <span className="separator" />
            </li>
            {/* BEGIN INBOX DROPDOWN */}
            <li
              className="dropdown dropdown-extended dropdown-dark dropdown-inbox"
              id="header_inbox_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <span className="circle">3</span>
                <span className="corner" />
              </a>
              <ul className="dropdown-menu">
                <li className="external">
                  <h3>
                    You have <strong>7 New</strong> Messages
                  </h3>
                  <Link to="javascript:;">view all</Link>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list scroller"
                    style={{ height: 275 }}
                    data-handle-color="#637283"
                  >
                    <li>
                      <Link to="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="../../assets/admin/layout3/img/avatar2.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Lisa Wong </span>
                          <span className="time">Just Now </span>
                        </span>
                        <span className="message">
                          Vivamus sed auctor nibh congue nibh. auctor nibh
                          auctor nibh...{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="../../assets/admin/layout3/img/avatar3.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Richard Doe </span>
                          <span className="time">16 mins </span>
                        </span>
                        <span className="message">
                          Vivamus sed congue nibh auctor nibh congue nibh.
                          auctor nibh auctor nibh...{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="../../assets/admin/layout3/img/avatar1.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Bob Nilson </span>
                          <span className="time">2 hrs </span>
                        </span>
                        <span className="message">
                          Vivamus sed nibh auctor nibh congue nibh. auctor nibh
                          auctor nibh...{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="../../assets/admin/layout3/img/avatar2.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Lisa Wong </span>
                          <span className="time">40 mins </span>
                        </span>
                        <span className="message">
                          Vivamus sed auctor 40% nibh congue nibh...{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="inbox.html?a=view">
                        <span className="photo">
                          <img
                            src="../../assets/admin/layout3/img/avatar3.jpg"
                            className="img-circle"
                            alt=""
                          />
                        </span>
                        <span className="subject">
                          <span className="from">Richard Doe </span>
                          <span className="time">46 mins </span>
                        </span>
                        <span className="message">
                          Vivamus sed congue nibh auctor nibh congue nibh.
                          auctor nibh auctor nibh...{" "}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* END INBOX DROPDOWN */}
            {/* BEGIN USER LOGIN DROPDOWN */}
            <li className="dropdown dropdown-user dropdown-dark">
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <img
                  alt=""
                  className="img-circle"
                  src="assets/admin/layout3/img/avatar9.jpg"
                />
                <span className="username username-hide-mobile">{localStorage.getItem("userName")}</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-default">
                <li>
                  <Link to="extra_profile.html">
                    <i className="icon-user" /> My Profile{" "}
                  </Link>
                </li>
                <li>
                  <Link to="page_calendar.html">
                    <i className="icon-calendar" /> My Calendar{" "}
                  </Link>
                </li>
                <li>
                  <Link to="inbox.html">
                    <i className="icon-envelope-open" /> My Inbox{" "}
                    <span className="badge badge-danger">3 </span>
                  </Link>
                </li>
                <li>
                  <Link to="javascript:;">
                    <i className="icon-rocket" /> My Tasks{" "}
                    <span className="badge badge-success">7 </span>
                  </Link>
                </li>
                <li className="divider"></li>
                <li>
                  <Link to="extra_lock.html">
                    <i className="icon-lock" /> Lock Screen{" "}
                  </Link>
                </li>
                <li>
                  <Link to="login.html">
                    <i className="icon-key" /> Log Out{" "}
                  </Link>
                </li>
              </ul>
            </li>
            {/* END USER LOGIN DROPDOWN */}
          </ul>
        </div>
        {/* END TOP NAVIGATION MENU */}
      </div>
    </div>
    {/* END HEADER TOP */}
    {/* BEGIN HEADER MENU */}
    <div className="page-header-menu">
      <div className="container">
        {/* BEGIN HEADER SEARCH BOX */}
        <form className="search-form" action="extra_search.html" method="GET">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="query"
            />
            <span className="input-group-btn">
              <Link to="javascript:;" className="btn submit">
                <i className="icon-magnifier" />
              </Link>
            </span>
          </div>
        </form>
        {/* END HEADER SEARCH BOX */}
        {/* BEGIN MEGA MENU */}
        {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
        {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
        <div className="hor-menu ">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/index">ANASAYFA</Link>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                TANIMLAR <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-user" />
                    Müşteri{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/Musteri">Müşteri Listesi </Link>
                    </li>
                    <li className=" ">
                      <Link to="/YeniMusteri">Yeni Kayıt </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-bar-chart" />
                    Ürün{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/Urun">Ürün Listesi </Link>
                    </li>
                    <li className=" ">
                      <Link to="/urun_yeni">Yeni Ürün Kaydı </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                OPERASYON <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-briefcase" />
                    Sipariş{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/Siparis">Sipariş Listesi </Link>
                    </li>
                    <li className=" ">
                      <Link to="/siparis_yeni">Yeni Sipariş </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-bar-chart" />
                    Tahsilat{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/Tahsilat">Tahsilat Listesi </Link>
                    </li>
                    <li className=" ">
                      <Link to="/tahsilat_yeni">Yeni Tahsilat </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-pointer" />
                    Ödeme{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/Odeme">Ödeme Listesi </Link>
                    </li>
                    <li className=" ">
                      <Link to="/odeme_yeni">Yeni Ödeme </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                EKRAN İÇERİKLERİ <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-briefcase" />
                    Sipariş Durumu{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/siparisdurumu">Liste </Link>
                    </li>
                    <li className=" ">
                      <Link to="/siparisdurumu_yeni">Yeni </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-bar-chart" />
                    Şehir{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/sehir">Liste </Link>
                    </li>
                    <li className=" ">
                      <Link to="/sehir_yeni">Yeni </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-pointer" />
                    Tahsilat Tipi{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/tahsilattipi">Liste </Link>
                    </li>
                    <li className=" ">
                      <Link to="/tahsilattipi_yeni">Yeni </Link>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <Link to=":;">
                    <i className="icon-puzzle" />
                    Ürün Kategorisi{" "}
                  </Link>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <Link to="/urunkategorisi">Liste </Link>
                    </li>
                    <li className=" ">
                      <Link to="/urunkategorisi_yeni">Yeni </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* END MEGA MENU */}
      </div>
    </div>
    {/* END HEADER MENU */}
  </div>
  {/* END HEADER */}
  </>
  );
  }
  export default Header;