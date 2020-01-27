import React from 'react';

const Message = ({formIsValid}) => {
    return (
        <div>
            <h3 className="text-center message">
                {
                    formIsValid === true ? "Form is Complete!" : "Form is Incomplete!"
                }
            </h3>
        </div>
    )
}

export default Message;