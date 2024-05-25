import { useState, useRef } from "react"
import ConfirmationModal from "./ConfirmationModal"

export default function ModelFocuse() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.iconFocus()}>Focus Close</button>
      <button onClick={() => modalRef.current.yesFocus()}>Focus Confirm</button>
      <button onClick={() => modalRef.current.noFocus()}>Focus Deny</button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}