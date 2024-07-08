import React from "react";
import Logo from "../assets/images/logo.svg"
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

export default function Nav() {

    const listElements = [
        {
            text: 'Store'
        },
        {
            text: 'Mac'
        },
        {
            text: 'iPad'
        },
        {
            text: 'iPhone'
        },
        {
            text: 'Watch'
        },
        {
            text: 'Airpods'
        },
        {
            text: 'Tv & Home'
        },
        {
            text: 'Entertainment'
        },
        {
            text: 'Accessories'
        },
        {
            text: 'Support'
        },
    ]

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          {listElements.map(item => {
            return (
                <li key={item.text}>
                    <a className="link-styled">
                        {item.text}
                    </a>
                </li>
            )})}
            <li>
                <img src={Search} alt="Search" />
            </li>
            <li>
                <img src={Store} alt="Store" />
            </li>
        </ul>
      </div>
    </nav>
  );
}
