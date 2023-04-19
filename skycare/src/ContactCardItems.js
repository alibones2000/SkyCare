import { Link } from "react-router-dom";

function ContactCardItems(props){
    return(
        <>
        <li className="cards___item">
            <Link className="cards___item___link" to={props.path}>
                <figure className="cards___item___pic---wrap" data-category={props.label}>
                    <img src={props.src} alt="pharamcy image"
                    className="cards___item___img"></img>
                </figure>
                <div className='cards___item___info'>
                    <h5 className='cards___item___text'>{props.text}</h5>
                </div>
            </Link>
        </li>
            </>
    )
}
export default ContactCardItems; 