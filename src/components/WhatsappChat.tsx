const WhatsappChat = () => {
    const phoneNumber = "919868495901";

  return (
    <div className="fixed bottom-6 right-6">
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Omega Tutorials on WhatsApp">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-lg" aria-label="Chat with Omega Tutorials">Chat with us</button>
        </a>
    </div>
  )
}

export default WhatsappChat