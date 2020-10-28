import React, { Component } from 'react';
// import axios from 'axios';
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';



import * as Yup from 'yup';

/**
 * 非同期 Varidation
 */
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('氏名は必須です'),
    email: Yup.string()
        .email('メールアドレスの形式に誤りがあります')
        .required('メールアドレスは必須です'),
    content: Yup.string()
        .required('お問い合わせ内容を入力してください。'),
});



class ContactForm extends Component {
    constructor(props) {
        super(props);
    }
    /**
     * フォーム送信後の処理
     */
    handleSubmit(form, { resetForm }) {
        alert('送信しました')
        // let text = `■ 名前: ${form.name}\n■ メールアドレス: ${form.email}\n■ お問い合わせ内容: ${form.content}`
        // let data = {
        //     method: 'post',
        //     baseURL: webhookURL,
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //     },
        //     data: `payload={ "text": "${text}"}`
        // };
        // try {
        //     axios.request(data)
        //     alert('送信しました')
        //     resetForm()
        // } catch (error) {
        //     alert('送信に失敗しました')
        // }
    }
    render() {
        return (
            <Formik
                onSubmit={this.handleSubmit}
                validationSchema={validationSchema}
            >
                <form name="contact" method="POST" netlify>

                    <div className="form-field field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className="invalidForm"
                            style={{ color: "red" }}
                        />
                    </div>

                    <div className="form-field field half first">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="invalidForm"
                            style={{ color: "red" }}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                        <ErrorMessage
                            name="content"
                            component="div"
                            className="invalidForm"
                            style={{ color: "red" }}
                        />
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
            </Formik>
        )
    }
}

export default ContactForm;