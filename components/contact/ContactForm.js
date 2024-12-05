import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageIsSent, setMessageIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://z58r3iikb0.execute-api.eu-west-1.amazonaws.com/dev/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessageIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      width: '100%',
      marginTop: '16px',
      fontSize: '24px',
    }}>
      <div>
        <label>
          YOUR NAME<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              fontSize: '24px',
              maxWidth: '100%',
              padding: '8px',
            }} />
        </label>
      </div>
      <div style={{
        marginTop: '16px',
      }}>
        <label>
          YOUR EMAIL ADDRESS<br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              fontSize: '24px',
              maxWidth: '100%',
              padding: '8px',
            }} />
        </label>
      </div>
      <div style={{
        marginTop: '16px',
      }}>
        <label>
          YOUR MESSAGE<br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              fontSize: '24px',
              width: '100%',
              minHeight: '24vh',
              resize: 'none',
              padding: '8px',
            }} />
        </label>
      </div>
      <div>
        {messageIsSent
          ? "Message sent!"
          : <button style={{
            fontSize: '24px',
            padding: '8px',
            margin: '24px',
          }} type="submit">Send Message</button>
        }
      </div>
    </form>
  );
}

export default ContactForm;
