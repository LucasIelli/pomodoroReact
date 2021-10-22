import {createPortal} from "react-dom";
import PropTypes from "prop-types";
import {unBreakableSpace, BREAK_DURATION} from "../../core/constants";
import Display from "../display";
import Button from "../tools/button";
import {useTimer} from "../../core/hooks/useTimer";

const Modal = ({onClose, onRestart}) => {
    const [{seconds}, {setRunning}] = useTimer(BREAK_DURATION, true, onRestart);

    return createPortal(
        <div className={"modal-overlay"}>
            <div className={"box"}>
                <h4>{"Work time over !"}</h4>
                <Display seconds={seconds} />
                <p>{"Let's take a little break !"}</p>
                <div className={"is-flex"}>
                    <Button
                        label={"Stop"}
                        onClick={() => {
                            setRunning(false);
                            onClose();
                        }}
                    />
                    {unBreakableSpace}
                    <Button
                        label={"Restart"}
                        onClick={() => {
                            setRunning(false);
                            onRestart();
                        }}
                    />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;
