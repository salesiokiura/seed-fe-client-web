import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Inbox from '../components/inbox'; // Adjust the import path as needed

describe('Inbox', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Inbox />
      </MemoryRouter>
    );
  });

  it('renders without crashing', () => {
    const inboxComponent = screen.getByTestId('inbox-component');
    expect(inboxComponent).toBeInTheDocument();
  });

  it('displays the header with "INBOX" title', () => {
    const inboxHeader = screen.getByText('INBOX');
    expect(inboxHeader).toBeInTheDocument();
  });

  it('displays a button to go back to the home page', () => {
    const backButton = screen.getByTestId('back-button');
    expect(backButton).toBeInTheDocument();
  });

  it('displays a list of messages', () => {
    const messageList = screen.getByRole('list');
    expect(messageList).toBeInTheDocument();
  });

  it('displays individual message items', () => {
    const messageItems = screen.getAllByRole('listitem');
    expect(messageItems.length).toBeGreaterThan(0);
  });

  it('displays message content', () => {
    const messageContent = screen.getByText('Good evening. I would like to request for a slot to change my car battery. is one available at the moment?');
    expect(messageContent).toBeInTheDocument();
  });

  it('displays message sender name', () => {
    const senderName = screen.getByText('BRIAN M.');
    expect(senderName).toBeInTheDocument();
  });

  it('displays message date', () => {
    const messageDate = screen.getByText('2023-07-23');
    expect(messageDate).toBeInTheDocument();
  });

  it('displays bottom navigation buttons', () => {
    const homeButton = screen.getByTestId('home-button');
    const transactionButton = screen.getByTestId('transaction-button');

    expect(homeButton).toBeInTheDocument();
    expect(transactionButton).toBeInTheDocument();
  });

  it('redirects to the home page when the home button is clicked', () => {
    const homeButton = screen.getByTestId('home-button');
    fireEvent.click(homeButton);

    //add assertions here for the redirect behavior
  });

  it('redirects to the charging transactions page when the transaction button is clicked', () => {
    const transactionButton = screen.getByTestId('transaction-button');
    fireEvent.click(transactionButton);

    //add assertions here for the redirect behavior
  });
});
