import Contact from "./Contact";

function ContactList(props){
    return (
        <>
            {props.contacts.map(el => <Contact name={el.name} phone={el.phone}/>)}
        </>
    );
}
export default ContactList;
