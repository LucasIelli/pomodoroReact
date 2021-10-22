import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({label, title, disabled = false, onClick, ...props}) => {
    return (
        <button
            className={classNames(
                "button",
                "is-link",
                "is-medium",
                "is-fullwidth",
            )}
            type={"button"}
            title={title || label}
            disabled={disabled}
            onClick={onClick}
            {...props}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Button;
