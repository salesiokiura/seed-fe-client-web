import React from 'react';
import { ResponsiveWrapper } from '../hoc';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const header = {
  backgroundColor: '#2A4454',
  padding: '10px',
};

const inboxStyles = {
  maxWidth: '100%',
  minWidth: '200px',
  margin: '0 auto',
  padding: '16px',
};

const listItemStyles = {
  border: '1px solid #ccc',
  marginBottom: '20px',
  padding: '20px',
};

const transactionContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '16px',
};

const backButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent', // Change the background to transparent
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  border: '2px solid white', // Add a white border to create the circular outline
  cursor: 'pointer',
};

function TransactionDetails({ deviceInfo }) {
  return (
    <div style={listItemStyles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p className="text-gray-600">Device:</p>
          <p className="font-semibold">{deviceInfo.deviceName}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p className="text-gray-600">Owner:</p>
          <p className="font-semibold">{deviceInfo.owner}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p className="text-gray-600">Amount Charged:</p>
          <p className="font-semibold">{deviceInfo.amountCharged}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p className="text-gray-600">Charging Time:</p>
          <p className="font-semibold">{deviceInfo.chargingTime}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p className="text-gray-600">Time Picked:</p>
          <p className="font-semibold">{deviceInfo.timePicked}</p>
        </div>
      </div>
    </div>
  );
}

function Charging_transactions() {
  const currentDate = new Date().toLocaleDateString();
  const deviceInfo = {
    deviceName: 'Sample Device',
    owner: 'John Doe',
    amountCharged: '$19.99',
    chargingTime: '3 hours 30 mins',
    timePicked: '12:15 PM',
  };

  return (
    <div style={inboxStyles}>
      <div style={header}>
        <Link to="/">
          <button style={backButtonStyles}>
            <FaArrowLeft style={{ color: 'white', fontSize: '20px' }} />
          </button>
        </Link>
        <h2 className="text-center text-white font-bold text-2xl">CHARGING TRANSACTIONS</h2>
      </div>

      {/* Date */}
      <div className="text-center" style={{ marginBottom: '20px', fontSize: '14px', color: '#888' }}>
        {currentDate}
      </div>

      {/* Transaction Details */}
      <div style={transactionContainerStyles}>
        {[...Array(4)].map((_, index) => (
          <TransactionDetails key={index} deviceInfo={deviceInfo} />
        ))}
      </div>
    </div>
  );
}

export default ResponsiveWrapper(Charging_transactions);
