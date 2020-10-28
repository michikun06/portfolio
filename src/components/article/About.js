import React from "react"
import pic03 from '../../images/pic03.jpg'


const About = ({ close, articleTimeout, article }) => {
    return (
        <>
            {/* 【About】 */}
            <article
                id="about"
                className={`${article === 'about' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
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
        </>
    )
}

export default About