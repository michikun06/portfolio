import React from "react"
import pic021 from '../../images/pic021.jpg'
import pic022 from '../../images/pic022.jpg'


const Work = ({ close, articleTimeout, article }) => {
    const workBox = {
        margin: "50px 10px 70px"
    }

    return (
        <>
            {/* 【About】 */}
            <article
                id="work"
                className={`${article === 'work' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
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
        </>
    )
}

export default Work