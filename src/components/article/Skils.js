import React from "react"
import pic01 from '../../images/pic01.jpg'


const Skils = ({ close, articleTimeout, article }) => {
    const skil = {
        display: "inline-block",
        width: "25%"
    }

    return (
        <>
            <article
                id="intro"
                className={`${article === 'intro' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
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
                    <li><span style={skil}>PHP　</span>:　★★</li>
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
        </>
    )
}

export default Skils