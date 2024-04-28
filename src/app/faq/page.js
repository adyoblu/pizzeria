'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

const faqs = [
    {
      question: 'How do I find my nearest Cicis?',
      answer: 'You can use our store locator on our website to find the nearest Cicis Pizza location.',
    },
    {
      question: 'What are Cicis hours of operation?',
      answer: 'Our hours vary by location, so please check with your local Cicis for specific hours.',
    },
    {
      question: 'How much does a buffet cost?',
      answer: 'Buffet prices can vary by location, so please check with your local Cicis for the most accurate pricing.',
    },
    {
      question: 'How do I order Cicis online?',
      answer: 'You can order online through our website or mobile app for pickup or delivery.',
    },
    {
      question: 'I’m interested in having a fundraising event at Cicis. How do I sign up?',
      answer: 'Please contact your local Cicis to discuss fundraising opportunities and set up an event.',
    },
    // ... Add more FAQs here
    {
      question: 'Does Cicis offer discounts for seniors, military personnel, and large groups?',
      answer: 'Yes, we offer various discounts. Please check with your local Cicis for specific discount details.',
    },
    {
      question: 'What happened to the MyCicis Loyalty App and rewards?',
      answer: 'We have updated our loyalty program. Please visit our website or contact us for more information.',
    },
    // ... Continue adding other FAQs as needed
  ];
  
  const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleFAQ = index => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <Container>
        <Title>Frequently Asked Questions</Title>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
            </Question>
            {activeIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </Container>
    );
  };

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FAQItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const Question = styled.div`
  cursor: pointer;
  padding: 10px 0;
  &:hover {
    color: #007bff;
  }
`;

const Answer = styled.div`
  padding: 10px 0;
`;

export default FAQPage;
