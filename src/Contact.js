import ContactName from "./ContactName";

function Contact(props){

    return <div>{props.name}
    <ContactName name={props.name}/>{props.phone}
    </div>;
}
export default Contact;