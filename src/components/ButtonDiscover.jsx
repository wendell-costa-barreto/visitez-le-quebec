import "./ButtonDiscover.css"
import { Icon } from '@iconify/react';
import PropTypes from "prop-types";

export default function ButtonDiscover({ text, icon }) {
    return (
        <button className="btn btn-hero">
            {text}
            <Icon icon={icon} inline={true} />
        </button>
    )
}

ButtonDiscover.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string
}