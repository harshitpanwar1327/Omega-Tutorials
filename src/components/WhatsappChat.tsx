const WhatsappChat = () => {
    const phoneNumber = "919868495901";

  return (
    <div className="fixed bottom-6 right-6">
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">Chat with us</button>
        </a>
    </div>
  )
}

export default WhatsappChat