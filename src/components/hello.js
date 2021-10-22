import PropTypes from "prop-types";

const Hello = ({name}) => {
    return <p>{`Hello, ${name} !`}</p>;
};

Hello.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Hello;
