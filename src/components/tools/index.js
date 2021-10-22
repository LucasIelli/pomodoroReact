import classNames from "classnames";
import PropTypes from "prop-types";
import Button from "./button";
import {unBreakableSpace} from "../../core/constants";

const Tools = ({running = false, onMinus, onReset, onPlayPause, onPlus}) => {
    return (
        <div className={classNames("is-flex")}>
            <Button
                label={"-"}
                title={"Remove one minute"}
                disabled={running}
                onClick={onMinus}
            />
            {unBreakableSpace}
            <Button label={"Reset"} disabled={running} onClick={onReset} />
            {unBreakableSpace}
            <Button
                label={running ? "Pause" : "Play"}
                title={`${running ? "Pause" : "Play"}the timer`}
                onClick={onPlayPause}
            />
            {unBreakableSpace}
            <Button
                label={"+"}
                title={"Add one minute"}
                disabled={running}
                onClick={onPlus}
            />
        </div>
    );
};

Tools.propTypes = {
    running: PropTypes.bool,
    onMinus: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlayPause: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
};

export default Tools;
