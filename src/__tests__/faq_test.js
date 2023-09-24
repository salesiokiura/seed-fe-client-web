import React from 'react';
import { render, screen } from '@testing-library/react';
import FAQ from '../components/faq'; 

const faqData = [
  {
    question: 'What is the first question?',
    answer: 'This is the answer to the first question.',
  },
  {
    question: 'What is the second question?',
    answer: 'This is the answer to the second question.',
  },
  // Add more FAQ data as needed
];

describe('FAQ', () => {
  it('renders without crashing', () => {
    render(<FAQ />);
    // You can add more specific tests here if needed
  });

  it('displays the title "FAQS"', () => {
    render(<FAQ />);
    const titleElement = screen.getByText('FAQS');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays FAQ questions and answers', () => {
    render(<FAQ />);
    
    faqData.forEach((faq, index) => {
      const questionElement = screen.getByText('Q: Can I charge more than one device at the same time?');
      const answerElement = screen.getByText('A: Yes, you can book charging slots for more than one device');
      
      expect(questionElement).toBeInTheDocument();
      expect(answerElement).toBeInTheDocument();
    });
  });

});

test('clicking the "Go Back" button navigates back to the login landing page', () => {
  const { container, history } = render(
    <Router>
      <AboutUs />
    </Router>
  );

  const goBackButton = container.querySelector('#back');

  fireEvent.click(goBackButton);

  expect(history.location.pathname).toBe('/'); 
});
