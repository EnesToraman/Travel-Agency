import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './top-bar.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <FontAwesomeIcon className="plane-logo" icon={faPlane}/>
            <span className="text">Book with confidence. Click for our safe travel approach and flexible cancellation policy.</span> 
        </div>
    );
}
 
export default Topbar;