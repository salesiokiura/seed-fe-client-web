import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../components/home'; 

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders without crashing', () => {
    const homeComponent = screen.getByTestId('home-component');
    expect(homeComponent).toBeInTheDocument();
  });

  it('displays the "Welcome Back" text', () => {
    const welcomeText = screen.getByText('Welcome Back');
    expect(welcomeText).toBeInTheDocument();
  });

  it('displays the user name', () => {
    const userName = screen.getByText('Brain234');
    expect(userName).toBeInTheDocument();
  });

  it('displays a button to go to the user profile', () => {
    const profileButton = screen.getByAltText('user profile button');
    expect(profileButton).toBeInTheDocument();
  });

  it('displays the charging transaction section', () => {
    const chargingTransactionSection = screen.getByText('CHARGING TRANSACTIONS');
    expect(chargingTransactionSection).toBeInTheDocument();
  });

  it('displays a "See All" link for charging transactions', () => {
    const seeAllLink = screen.getByText('SEE ALL');
    expect(seeAllLink).toBeInTheDocument();
  });

  it('displays the client section', () => {
    const clientSection = screen.getByText('Client');
    expect(clientSection).toBeInTheDocument();
  });

  it('displays the services section', () => {
    const servicesSection = screen.getByText('SERVICES');
    expect(servicesSection).toBeInTheDocument();
  });

  it('displays a "See All" link for services', () => {
    const seeAllServicesLink = screen.getByText('SEE ALL', { exact: false });
    expect(seeAllServicesLink).toBeInTheDocument();
  });

  it('displays the recent payments section', () => {
    const recentPaymentsSection = screen.getByText('RECENT PAYMENTS');
    expect(recentPaymentsSection).toBeInTheDocument();
  });

  it('displays a "See All" link for recent payments', () => {
    const seeAllPaymentsLink = screen.getByText('SEE ALL', { exact: false });
    expect(seeAllPaymentsLink).toBeInTheDocument();
  });

  it('displays the energy analytics section', () => {
    const energyAnalyticsSection = screen.getByText('Energy Consuption');
    expect(energyAnalyticsSection).toBeInTheDocument();
  });

  it('displays the inbox button', () => {
    const inboxButton = screen.getByAltText('inbox button');
    expect(inboxButton).toBeInTheDocument();
  });
});

test('clicking the "Profile" button navigates back to the profile page', () => {
    const { container, history } = render(
      <Router>
        <Home/>
      </Router>
    );
  
    const profileButton = container.querySelector('#profile');
  
    fireEvent.click(profileButton);
  
    expect(history.location.pathname).toBe('/profile'); 
  });

  test('clicking the "See All" button navigates back to the charging trasactions page', () => {
    const { history } = render(
      <Router>
        <Home />
      </Router>
    );
  
    const chargingTransactionsSeeAll = screen.getByText('CHARGING TRANSACTIONS');
    fireEvent.click(chargingTransactionsSeeAll);
  
    expect(history.location.pathname).toBe('/charging_transactions'); 
  });

  test('clicking the "See All" button navigates back to the services page', () => {
    const {  history } = render(
      <Router>
        <Home />
      </Router>
    );
  
    const servicesSeeAll = screen.getByText('');
    fireEvent.click(servicesSeeAll);
  
    expect(history.location.pathname).toBe('/services'); 
  });

  test('clicking the "See All" button navigates back to the recent payments page', () => {
    const {  history } = render(
      <Router>
        <Home />
      </Router>
    );
  
    const recentPaymentsSeeAll = screen.getByText('RECENT PAYMENTS');
    fireEvent.click(recentPaymentsSeeAll);
  
    expect(history.location.pathname).toBe('/recent_payments'); 
  });

  test('clicking the "Inbox" button navigates back to the inbox page', () => {
    const {  history } = render(
      <Router>
        <Home />
      </Router>
    );
  
    const inboxBtn = screen.getByText('INBOX');
    fireEvent.click(inboxBtn);
  
    expect(history.location.pathname).toBe('/inbox'); 
  });
  
  