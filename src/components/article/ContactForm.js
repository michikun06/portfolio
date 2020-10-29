import React from 'react';


const ContactForm = () => {
    return (
        <>
            {/* <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form> */}

            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className="field half first">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>

                <div className="form-field">
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
        </>
    )
}

export default ContactForm;