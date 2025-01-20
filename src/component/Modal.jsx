import React, { useState } from "react";
import './modal.css';

const Modal = ({ visible }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [no, setNo] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log("Phone Number:", no);
    // console.log("Date of Birth:", dob);
    if(no.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dobDate = new Date(dob);

    if (dobDate > today) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
    setName("");
    setEmail("");
    setNo("");
    setDob("");

  };

  return (
    <div className="modal" style={{ display: visible ? 'block' : 'none' }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h4>Fill Details</h4>
        <form onSubmit={handleSubmit} className="modal-content">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" required value={name} onChange={(e) => setName(e.target.value)}/>
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
          
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            required
            onChange={(e) => setNo(e.target.value)}
            value={no}
          />
          
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            required
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
          
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
