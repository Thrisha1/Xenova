import { ChatIcon } from '@heroicons/react/outline';

export default function ShareButton() {
  const handleShareClick = () => {
    // const shareUrl = 'https://google.com'; // Replace with your own share URL
    // const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareUrl)}`;
    // window.location.href = whatsappUrl;
  };

  return (
    <button
    //   onClick={handleShareClick}
      className="flex items-center justify-center bg-green-500 text-white rounded-full p-3 focus:outline-none hover:bg-green-600 cursor-pointer"
    >
      <ChatIcon className="h-6 w-6 mr-2" aria-hidden="true" />
      Share on WhatsApp
    </button>
  );
}
