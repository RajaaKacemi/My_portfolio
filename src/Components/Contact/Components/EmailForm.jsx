import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function EmailForm({ isDarkMode }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const notifySuccess = () => {
        swal({
            title: 'Your email has been sent successfully',
            text: 'We appreciate your patience and will reach out to you soon',
            icon: 'success',
            button: 'close',
            className: 'alert',
        }).then(() => {
            navigate('/Home');
        });
    };

    function onSubmit(e) {
        e.preventDefault();
        
    
        if (!email || !message) {
            setError("Email and Message are required.");
            return;
        }
    
        fetch("https://formcarry.com/s/_TLKKWOVu-", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ email: email, name: name, message: message })
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.code === 200) {
                setSubmitted(true);
            } else {
                setError(res.message);
            }
        })
        .catch((error) => setError(error));
    }
    
    
   
    if (submitted) {
        notifySuccess();
    }

    return (
        <div>
            <form  className={`flex flex-col gap-4 text-start `}>
            {error && <p className="text-red-500">{error}</p>}
                <div className="flex flex-col">
                    <label htmlFor="name" className={`text-sm py-2 ${isDarkMode ? 'text-white' : 'text-gray-500 '}`}>Name</label>
                    <input type="text" id="name" name="name" placeholder=" " value={name} onChange={(e) => setName(e.target.value)} className="py-1 border-b border-gray-300 focus:outline-none focus:border-black" />
                </div>
                <div className="flex flex-col">
                
                    <label htmlFor="email" className={`text-sm py-2 ${isDarkMode ? 'text-white' : 'text-gray-500 '}`}>Email *</label>
                    <input type="email" id="email" name="email" placeholder=" " required value={email} onChange={(e) => setEmail(e.target.value)}  className="py-1 border-b border-gray-300 focus:outline-none focus:border-black" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className={`text-sm py-2 ${isDarkMode ? 'text-white' : 'text-gray-500 '}`}>Message *</label>
                    <textarea id="message" name="message" rows="4" placeholder=" " value={message} onChange={(e) => setMessage(e.target.value)} required className="py-1 text-black border border-gray-300 focus:outline-none focus:border-black" />
                </div>
                <button type="submit" className={`py-2 px-4 hover:bg-gray-800 transition-colors ${isDarkMode ? 'bg-gray-800 ' : 'bg-black text-white'}`} onClick={onSubmit}>Submit</button>
            
            </form>
        </div>
    );
}

export default EmailForm;