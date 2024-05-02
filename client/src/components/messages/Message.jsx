import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    
    // Définir les classes pour contrôler la disposition en fonction de l'expéditeur
    const flexDirection = fromMe ? 'flex-row-reverse' : 'flex-row';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : "bg-gray-300";  // Supposons une couleur différente pour les autres
    const formattedTime = extractTime(message.createdAt);

    return (
        <div className={`chat flex ${flexDirection} items-center`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='User profile' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-red-700'>{formattedTime}</div>
        </div>
    );
};

export default Message;

