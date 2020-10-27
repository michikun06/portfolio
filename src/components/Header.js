import PropTypes from 'prop-types'
import React from 'react'
import michi from "../images/michi1.png"

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="image main">
        <img src={michi} alt="似顔絵" />
      </span>
      {/* <span className="icon fa-diamond"></span> */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>PORTFOLIO</h1>
        <p>
          このページはMichihiro Kawajiのポートフォリオサイトです。
          <br />
          下記ボタンより私の自己紹介ページをご覧可能ですが、
          <a href="https://omich.site/">こちらのブログ</a>で情報発信も行っております。
        </p>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/michi252417"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/michihiro.kawaji" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/michi_officiall/?hl=ja" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/michikun06"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            skils
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
