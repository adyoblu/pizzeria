import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <Container>
        <HeaderInfo>
          <Title>Let's get in touch</Title>
          <Description>
            We&apos;re here to answer any questions you may have. Reach out to us and we&apos;ll respond as soon as we can.
          </Description>
        </HeaderInfo>
        <Form>
          <FormGroup>
            <Label>First name:</Label>
            <Input type="text" id="fname" name="fname" />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input type="email" id="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label>Subject:</Label>
            <Input type="text" id="subject" name="subject" />
          </FormGroup>
          <FormGroup>
            <Label>Message:</Label>
            <TextArea id="message" name="message" />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
  background: #f7f7f7;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1rem;
  height: 150px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
