import React from 'react';

function Mailbox(props){
    const Message = props.Message;
    return (
        <div>
            <h2>MailBox</h2>
            {Message.length > 0 &&
                <p>
                    You have {Message.length} unread message.
                </p>
            }
        </div>
    );
}

export default Mailbox;