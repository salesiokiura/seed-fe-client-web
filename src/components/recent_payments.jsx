import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const RecentPayments = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <Link to="/home" className="cursor-pointer p-10px custom-button">
            <BsArrowLeftCircle className="py-[10px] pl-[10px] text-black text-[60px]" />
          </Link>
          <h2 style={styles.headerTitle}>Recent Payments</h2>
        </header>
        <div style={styles.payments}>
          {generatePaymentElement("SA", "SEED", "123456", "-Ksh 500", "25th July, 10:30 AM")}
          {generatePaymentElement("SA", "SEED", "654321", "-Ksh 300", "25th July, 11:15 AM")}
          {generatePaymentElement("SA", "SEED", "987654", "-Ksh 200", "25th July, 12:00 PM")}
          {generatePaymentElement("SA", "SEED", "456123", "-Ksh 100", "25th July, 1:30 PM")}
          {generatePaymentElement("SA", "SEED", "789456", "-Ksh 50", "25th July, 2:45 PM")}
          {generatePaymentElement("SA", "SEED", "852963", "-Ksh 80", "25th July, 3:20 PM")}
          {generatePaymentElement("SA", "SEED", "369852", "-Ksh 150", "25th July, 4:00 PM")}
          {generatePaymentElement("SA", "SEED", "741258", "-Ksh 70", "25th July, 5:10 PM")}
        </div>
      </div>
    </div>
  );
};

const generatePaymentElement = (circle, name, id, amount, dateAndTime) => (
  <div style={styles.payment}>
    <div style={{ ...styles.circle, backgroundColor: '#ffc0cb', color: 'red' }}>
      <span>{circle}</span>
    </div>
    <div style={styles.paymentDetails}>
      <div style={styles.nameId}>
        <span style={styles.paymentName}>{name}</span>
        <span style={styles.paymentId}>{id}</span>
      </div>
    </div>
    <div style={styles.amountAndDate}>
      <div style={styles.amount}>{amount}</div>
      <div style={styles.dateAndTime}>{dateAndTime}</div>
    </div>
  </div>
);

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f5f5f5',
  },
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    backgroundColor: '#1f334b',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px 5px 0 0',
  },
  headerTitle: {
    margin: 0,
    textTransform: 'uppercase',
  },
  payments: {
    display: 'flex',
    flexDirection: 'column',
  },
  payment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
    border: '0',
    borderBottom: '1px solid #ccc',
  },
  circle: {
    backgroundColor: '#ffcccf',
    color: 'red',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
  },
  paymentDetails: {
    flex: 1,
  },
  nameId: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  paymentName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  paymentId: {
    fontSize: '14px',
    color: '#888',
    textAlign: 'left',
  },
  amountAndDate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#d9534f',
  },
  dateAndTime: {
    fontSize: '14px',
    color: '#888',
  },
};

export default RecentPayments;
