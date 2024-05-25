import React, { useImperativeHandle, useRef } from "react"

function ConfirmationModal({ isOpen, onClose }, ref) {
    const iconRef = useRef();
    const yesRef = useRef();
    const noRef = useRef();
    useImperativeHandle(ref, () => ({
        iconFocus: () => iconRef.current.focus(),
        yesFocus: () => yesRef.current.focus(),
        noFocus: () => noRef.current.focus(),
    }), []);
    if (!isOpen) return null
    return (
        <div className="modal" >
            <button className="close-btn" ref={iconRef} onClick={onClose}>
                &times;
            </button>
            <div className="modal-header">
                <h1>Title</h1>
            </div>
            <div className="modal-body">Do you confirm?</div>
            <div className="modal-footer">
                <button className="confirm-btn" ref={yesRef} onClick={onClose}>
                    Yes
                </button>
                <button className="deny-btn" ref={noRef} onClick={onClose}>
                    No
                </button>
                {/* <input  ref={noRef} /> */}
            </div>
        </div>
    )
}

export default React.forwardRef(ConfirmationModal)