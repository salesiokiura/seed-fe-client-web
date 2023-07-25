// import React from 'react'
// import { ResponsiveWrapper } from '../hoc';
// import { Link } from 'react-router-dom';


// function ChargingTransactions() {
//   // Get the current date
//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <div>
//       {/* Payment Section in Navigation */}
//       <nav className="bg-2A4454 text-black p-4">
//         {/* Back button using Link */}
//         <Link to="/">
//           <div className="inline-block mr-4 cursor-pointer">
//             {/* SVG icon for the back arrow */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//           </div>
//         </Link>
//         {/* Title for Charging Transaction */}
//         <span className="text-2xl">CHARGING TRANSACTION</span>
//       </nav>

//       {/* Payment Content */}
//       <div className="bg-2A4454 text-pink-900	 p-4">
//         {/* Display the current date */}
//         <p className="text-sm">{currentDate}</p>
//         {/* Div for transaction details */}
//         <div>
//           <h2 className="text-xl">Device</h2>
//           <p className="text-2xl">Owner</p>
//           <p>Amount Charged</p>
//           <p>Charging Time</p>
//           <p>Time Picked</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ResponsiveWrapper(ChargingTransactions);

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 16px;
`;

const BackButton = styled.button`
  background-color: #2A4454;
  color: #fff;
  border-radius: 9999px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled.svg`
  fill: #fff;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const TransactionSection = styled.div`
  margin-top: 24px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
`;

const TransactionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const TransactionDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Label = styled.p`
  color: #7B8794;
`;

const Value = styled.p`
  font-weight: 600;
`;

const ChargingTransactions = () => {
  return (
    <Container>
      {/* Navigation Section */}
      <div className="flex items-center justify-between">
        <BackButton onClick={() => window.history.back()}>
          <ArrowIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </ArrowIcon>
        </BackButton>
        {/* Your website logo or title could be placed here */}
      </div>

      {/* Transaction Details Section */}
      <TransactionSection>
        <TransactionTitle>Charging Transaction</TransactionTitle>
        <TransactionDetail>
          <div>
            <Label>Date:</Label>
            <Value>July 21, 2023</Value>
          </div>
          <div>
            <Label>Device Name:</Label>
            <Value>Sample Device</Value>
          </div>
          <div>
            <Label>Owner:</Label>
            <Value>John Doe</Value>
          </div>
          <div>
            <Label>Amount Charged:</Label>
            <Value>$19.99</Value>
          </div>
          <div>
            <Label>Charging Time:</Label>
            <Value>3 hours 30 mins</Value>
          </div>
          <div>
            <Label>Time Picked:</Label>
            <Value>12:15 PM</Value>
          </div>
        </TransactionDetail>
      </TransactionSection>
    </Container>
  );
};

export default ChargingTransactions;
