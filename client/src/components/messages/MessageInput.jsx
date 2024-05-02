import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className='px-4 my-3 relative' onSubmit={handleSubmit}>
            <div className='flex w-full items-center'>
                <input
                    type='text'
                    className='border text-sm rounded-lg flex-grow p-2.5 bg-gray-700 border-gray-600 text-white'
                    placeholder='Envoyer un message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={loading}
                />
                <button
                    type='submit'
                    className='ml-2 flex items-center px-3 h-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg disabled:bg-gray-500'
                    disabled={loading}
                >
                    {loading ? <div className='loading loading-spinner' /> : <BsSend />}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
