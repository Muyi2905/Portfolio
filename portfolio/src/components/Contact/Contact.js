import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Contact.css";
// interface ContactProps {
//   email: string;
// }
const Contact = () => {
    const email = "obaremimuyiwa@gmail.com";
    const phoneNumber = "+2348135752549"; // Replace with your phone number
    return (_jsxs("section", { className: "section contact center", id: "contact", children: [_jsx("h2", { className: "section__title", children: "Contact" }), _jsxs("div", { className: "contact__links", children: [_jsx("a", { href: `mailto:${email}`, children: _jsx("button", { type: "button", className: "btn btn--outline", children: "Email me" }) }), _jsx("a", { href: `https://wa.me/${phoneNumber}`, children: _jsx("button", { type: "button", className: "btn btn--outline", children: "WhatsApp me" }) })] })] }));
};
export default Contact;
