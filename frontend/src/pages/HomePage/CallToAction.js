// src/pages/HomePage/CallToAction.js

import React, { useState } from 'react';
import '../../styles/HomePage/CallToAction.css';

const CallToAction = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: 'What is the process for booking an appointment?',
      answer: 'You can book an appointment easily by selecting a specialization, choosing a doctor, and scheduling a convenient time slot. It takes just a few minutes!'
    },
    {
      question: 'Can I consult a doctor online?',
      answer: 'Yes, you can connect with verified doctors through secure audio or video calls without visiting the clinic physically.'
    },
    {
      question: 'Is my consultation private and secure?',
      answer: 'Absolutely! All your consultations are private, end-to-end encrypted, and your data is safely protected following all medical regulations.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major payment options including credit/debit cards, UPI, net banking, and popular digital wallets for easy transactions.'
    },
    {
      question: 'How do I get my prescription?',
      answer: 'After your consultation, the doctor will upload a digital prescription that you can easily download and use at your pharmacy.'
    },
    {
      question: 'Can I reschedule or cancel an appointment?',
      answer: 'Yes, you can reschedule or cancel your appointment through your dashboard anytime before the consultation begins.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="call-to-action-section">
      <h2 className="call-to-action-title">Have Questions? We’ve Got Answers!</h2>
      <div className="faq-container">
        <div className="faq-column">
          {faqData.slice(0, 3).map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="dropdown-icon">{openFAQ === index ? '▼' : '▶'}</span>
                {faq.question}
              </div>
              {openFAQ === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
        <div className="faq-column">
          {faqData.slice(3).map((faq, index) => (
            <div key={index + 3} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index + 3)}>
                <span className="dropdown-icon">{openFAQ === index + 3 ? '▼' : '▶'}</span>
                {faq.question}
              </div>
              {openFAQ === index + 3 && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
