import * as React from 'react';
import Box from '@mui/material/Box';
import './Contact.css'
import whatsappIcon from '../../assets/whatsapp-icon.png';
import emailIcon from '../../assets/email-icon.png';
import addressIcon from '../../assets/address.webp';

const Contact = () => {
    return (
        <div className="Contact">
            <div className="heading">
                How to reach us
            </div>
            <div className="contact-container">
                <div className="contact-sub-container">
                    {/* WhatsApp */}
                    <Box
                        component="img"
                        sx={{
                            height: 150,
                            width: 150,
                        }}
                        alt="Whatsapp."
                        src={whatsappIcon}
                    />
                    <a href={`https://wa.me/27726983512?text=${encodeURI('Hello, I am from the website')}`} target='blank'>082 350 5445</a>
                </div>
                <div className="contact-sub-container">
                    {/* Email */}
                    <Box
                        component="img"
                        sx={{
                            height: 150,
                            width: 190,
                        }}
                        alt="Whatsapp."
                        src={emailIcon}
                    />
                    <a href="mailto:adambotha007@gmail.com" target='blank'>simplysharpstationery@gmail.com</a>
                </div>
                <div className="contact-sub-container">
                    {/* Address */}
                    <Box
                        component="img"
                        sx={{
                            height: 150,
                            width: 150,
                        }}
                        alt="Whatsapp."
                        src={addressIcon}
                    />
                    <a href="https://goo.gl/maps/9ez3gAVYd3US5AVB9" target='blank'>11 Brink Street, Welgemoed, 7500</a>
                </div>
            </div>


        </div>
    );
};
export default Contact;
