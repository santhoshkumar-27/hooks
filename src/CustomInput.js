import React from 'react'

function CustomInput({ style, ...props }, ref) {
    return (
        <input
            ref={ref}
            {...props}
            style={{
                border: "none",
                backgroundColor: "lightpink",
                padding: ".25em",
                borderBottom: ".1em solid black",
                borderTopRightRadius: ".25em",
                borderTopLeftRadius: ".25em",
                ...style,
            }}
        />
    );
}

export default React.forwardRef(CustomInput);