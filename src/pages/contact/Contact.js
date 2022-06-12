import * as React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="Contact">
            <div className="heading">
                How to reach us
            </div>
            <div className="contact-container">
                <div className="contact-sub-container">
                    {/* WhatsApp */}
                    <div id="whatsapp-img" className="contact-image" />
                    <hr className="divider" />
                    <div>082 350 5445</div>
                    <a className="contact-action-button" href={`https://wa.me/27726983512?text=${encodeURI('Hi, I have a stationery related enquiry.')}`} target='blank'>
                        Click here to start whatsapp chat
                    </a>
                </div>
                <div className="contact-sub-container">
                    <div id="email-img" className="contact-image" />
                    <hr className="divider" />
                    <div>simplysharpstationery@gmail.com</div>
                    <a className="contact-action-button" href="mailto:simplysharpstationery@gmail.com" target='blank'>
                        Click here to email us
                    </a>
                </div>
                <div className="contact-sub-container">
                    <div id="address-img" className="contact-image" />
                    <hr className="divider" />
                    <div>
                        11 Brink Street, Welgemoed, 7500
                    </div>
                    <a className="contact-action-button" href="https://goo.gl/maps/9ez3gAVYd3US5AVB9" target='blank'>
                        Click here for directions
                    </a>
                </div>
            </div>


        </div >
    );
};
export default Contact;
