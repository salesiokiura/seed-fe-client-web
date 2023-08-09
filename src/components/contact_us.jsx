import React from 'react';
import { ResponsiveWrapper } from '../hoc';
import faqData from '../constants';
import { BsArrowLeftCircle } from 'react-icons/bs';

function contact_us() {
  return (
    <>
      <div className="bg-[#2a4454] w-full h-screen mx-auto" style={{ overflow: 'auto' }}>
        <a className="cursor-pointer custom-button" href="/">
          <BsArrowLeftCircle className="py-[10px] pl-[0px] text-white text-[60px] box-shadow[1:0]" />
        </a>

        <div className="bg-white w-full h-auto mt-10 rounded-[20px] flex flex-col items-center custom-container">
          <h1
            style={{
              color: '#000',
              fontFamily: 'Roboto',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              marginBottom: '50px',
            }}
          >
            CONTACT US
          </h1>
          <img src="contact-us/contact-us-phone.png" alt="" style={{ width: '200px', height: '200px', flexShrink: 0, padding: '10px' }} />
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', width: '100%' }}>
              <tbody>
                <tr>
                  <td style={{paddingRight: '50px'}}>
                    <a href="https://www.instagram.com/seed@gmail.com" target="_blank">
                      <img src="contact-us/instagram.png" alt="" style={{ marginBottom: '10px', width: '50px', height: '50px' }} />
                    </a>
                  </td>
                  <td>
                    <a href="https://www.instagram.com/seed@gmail.com" target="_blank">
                    <h5 className="card-title" style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'Roboto' }}>
                      @_seed
                    </h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://www.facebook.com/seed@gmail.com" target="_blank">
                      <img src="contact-us/fb.jpg" alt="" style={{ marginBottom: '10px', width: '50px', height: '50px' }} />
                    </a>
                  </td>
                  <td>
                    <a href="https://www.facebook.com/seed@gmail.com" target="_blank">
                      <h5 className="card-title" style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'Roboto' }}>seed@gmail.com</h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="tel:0723786541">
                      <img src="contact-us/phone.jpg" alt="" style={{ marginBottom: '10px', width: '50px', height: '50px' }} />
                    </a>
                  </td>
                  <td>
                    <a href="tel:0723786541">
                      <h5 className="card-title" style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'Roboto' }}>0723786541</h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="mailto:seed@gmail.com" target="_blank">
                      <img src="contact-us/gmail.jpg" alt="" style={{ marginBottom: '10px', width: '50px', height: '50px' }} />
                    </a>
                  </td>
                  <td>
                    <a href="mailto:seed@gmail.com" target="_blank">
                      <h5 className="card-title" style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'Roboto' }}>seed@gmail.com</h5>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://api.whatsapp.com/send?phone=0723786541" target="_blank">
                      <img src="contact-us/whatsapp.jpg" alt="" style={{ marginBottom: '10px', width: '50px', height: '50px' }} />
                    </a>
                  </td>
                  <td>
                    <a href="https://api.whatsapp.com/send?phone=0723786541" target="_blank">
                      <h5 className="card-title" style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'Roboto' }}>0723786541</h5>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsiveWrapper(contact_us);