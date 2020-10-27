import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic021 from '../images/pic021.jpg'
import pic022 from '../images/pic022.jpg'
import pic03 from '../images/pic03.jpg'

const skil = {
  display: "inline-block",
  width: "25%"
}

const workBox = {
  margin: "50px 10px 70px"
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >

        {/* 【About】 */}
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            私は鹿児島の国立大学に通う大学4年のMichihiro Kawajiです。2020年の4月から留学予定でしたが、コロナで延期となり、現在はプログラミングに本格的に取り組んでいます。<br />
            また現在は、知人の事業のホームページ作成、集客、ポスター、ポストカード作成などIT全般に関わることを任されています。<br />

            同時に休学もしており、フリーランス活動や留学のための渡航準備をしたり、MUPスクールで経営マーケティングを学んだりしております。<br />
            最近の悩みですが、私は高専から大学に編入したため、身の回りの知り合い、友人が少ないです。ですので、初めましての方もインスタ、ツイッターからのDMをお待ちしております＼(^^)／
          </p>
          {close}
        </article>

        {/* 【Skils】 */}
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skils</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            フロントエンド周りの言語を学び始めて約一年が経ちました。(2020.10月現在)
            おかげさまで案件をいただくこともでき、現在は知人の事業立ち上げのIT関連を一人でやらせていただいております。私の現在の扱うことのできる言語、ツール等のスキルは以下になっております。
          </p>
          <h3>● 取得スキル（一人前を星５としたとき）</h3>
          <ul style={{ marginLeft: "30px" }}>
            <li><span style={skil}>HTML　</span>:　★★★★★</li>
            <li><span style={skil}>CSS　</span>:　★★★★</li>
            <li><span style={skil}>JavaScript　</span>:　★★★</li>
            <li><span style={skil}>jQuery　</span>:　★★★</li>
            <li><span style={skil}>Bootstrap　</span>:　★★★★</li>
            <li><span style={skil}>git　</span>:　★★★</li>
            <li><span style={skil}>React　</span>:　★★★</li>
            <li><span style={skil}>Gatsby　</span>:　★★★</li>
            <li><span style={skil}>Redux　</span>:　★★</li>
            <li><span style={skil}>Photoshop　</span>:　★★★</li>
            <li><span style={skil}>Illustrator　</span>:　★</li>
          </ul>
          {close}
        </article>

        {/* 【Work】 */}
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>

          <div style={workBox}>
            <h3 style={{ textAlign: 'center' }}>【 事業立ち上げHP作成SEO対策 】</h3>
            <span className="image main">
              <img src={pic021} alt="" />
            </span>
            <p>
              <a href="https://il-male.netlify.app/">こちらのサイト</a>をご覧ください。こちらは私の知人が立ち上げたオーダースーツ事業のHPです。ホームページ作成から運用SEO対策を行っております。
            </p>
          </div>

          <div style={workBox}>
            <h3 style={{ textAlign: 'center' }}>【 コンテストのバナー・ポスター作成 】</h3>
            <span className="image main">
              <img src={pic022} alt="" />
            </span>
            <p>
              上記の写真は、私の知人がコンテストに参加した際に作成したポスター画像です。
            </p>
          </div>

          <div style={workBox}>
            <h3 style={{ textAlign: 'center' }}>【 その他 】</h3>
            <p>
              その他にもホームページ等お作りいたしましたが、セキュリティ、プライバシーの関係上控えさせていただきます。
            </p>
          </div>


          {close}
        </article>

        {/* 【Contact】 */}
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >

          <h2 className="major">Contact</h2>

          {/* 入力フォーム */}
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>


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
          {close}
        </article>


      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
