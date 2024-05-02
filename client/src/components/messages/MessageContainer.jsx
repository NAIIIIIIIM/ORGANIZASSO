import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useEffect } from "react";

// Define NoChatSelected component first if it's in the same file
const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Salut 👋 John ❄️</p>
                <p>Choisi une vonversation </p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );

};

// MessageContainer component that uses NoChatSelected
const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation}= useConversation();

    useEffect(() => {
        // Clean up by clearing the selected conversation on unmount
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* HEADER */}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span>
                        <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;
