import React from "react"
import ContactFrom from "./ContactForm"

const Contact = ({ close, articleTimeout, article }) => {
    return (
        <>
            <article
                id="contact"
                className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`}
                style={{ display: 'none' }}
            >
                <h2 className="major">Contact</h2>

                <ContactFrom />

                {/* 入力フォーム */}
                {/* <form method="post" action="mailto:michikun06@icloud.com">
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
                </form> */}


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
        </>
    )
}

export default Contact