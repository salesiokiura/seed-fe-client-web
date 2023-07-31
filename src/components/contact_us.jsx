import React from 'react';
import { ResponsiveWrapper } from '../hoc';
import faqData from '../constants';
import { BsArrowLeftCircle } from 'react-icons/bs';

function contact_us() {
  return (
    <>

      <div className="bg-[#2a4454] w-full h-screen mx-auto overflow-hidden">
        <a className="cursor-pointer custom-button">
          <BsArrowLeftCircle className="py-[10px] pl-[0px] text-white text-[60px] box-shadow[1:0]" />
        </a>

        <div className="bg-white w-full h-full mt-10 rounded-[20px] flex flex-col items-center custom-container ">
          <h1 style={{
            color: '#000',
            fontFamily: 'Roboto',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            marginBottom: '50px',
          }}>CONTACT US</h1>
          <img
            src="contact-us/contact-us-phone.png"
            alt=""
            style={{
              width: '154px',
              height: '154px',
              flexShrink: 0,
              padding: '10px'
            }}
          />
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                <tbody>
                <tr>
                  <td><img src="contact-us/instagram.png" alt="" style={{ marginBottom: '40px', width: '70px', height: '70px', top: '463px', left: '31px' }}/></td>
                  <td>
                    <div className="card-body" card-body d-flex flex-column align-items-center style={{ flex: '1' }}>
                    
                      <h5 style={{
                        fontSize: '40px',
                        paddingLeft: '30px',
                        fontFamily: 'Roboto',
                        fontWeight: '700',
                        lineHeight: '28px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        marginBottom: '50px' 
                      }} className="card-title">@_seed</h5>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>
                    <img src="contact-us/fb.jpg" alt="" style={{ marginBottom: '40px', width: '70px', height: '70px',top: '530px', left: '40px' }}/>
                  </td>
                  <td>
                    <div className="card-body" card-body d-flex flex-column align-items-center style={{ flex: '1' }}>
                      <h5 style={{ fontSize: '40px', paddingLeft: '40px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '28px', letterSpacing: '0em', textAlign: 'left', marginBottom: '50px' }} className="card-title">seed@gmail.com</h5>
                    </div>

                  </td>
                </tr>

                <tr>
                  <td>
                    <img src="contact-us/phone.jpg" alt="" style={{ marginBottom: '40px', width: '70px', height: '70px', top: '600px', left: '50px'}}/>
                  </td>
                  <td>
                    <div className="card-body" card-body d-flex flex-column align-items-center style={{ flex: '1' }}>
                      <a href="tel:0723786541">
                      <h5 style={{ fontSize: '40px', paddingLeft: '30px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '28px', letterSpacing: '0em', textAlign: 'left', marginBottom: '50px' }} className="card-title">0723786541</h5>
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src="contact-us/gmail.jpg" alt="" style={{ marginBottom: '40px', width: '70px', height: '70px', top: '660px', left: '38px' }}/>
                  </td>
                  <td>
                    <div className="card-body" style={{ flex: '1' }}>
                      <a href="mailto:seed@gmail.com" target='_blank'>
                      <h5 style={{ fontSize: '40px', paddingLeft: '30px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '28px', letterSpacing: '0em', textAlign: 'left',marginBottom: '50px' }} className="card-title">seed@gmail.com</h5>
                      </a>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src="contact-us/whatsapp.jpg" alt="" style={{ marginBottom: '40px', width: '70px', height: '70px', top: '728px', left: '38px' }}/>
                  </td>
                  <td>
                    <div className="card-body" style={{ flex: '1' }}>
                    <a href="https://api.whatsapp.com/send?phone=0723786541" target="_blank">
                      <h5 style={{ fontSize: '40px', paddingLeft: '30px', fontFamily: 'Roboto', fontWeight: '700', lineHeight: '28px', letterSpacing: '0em', textAlign: 'left', marginBottom: '50px'  }} className="card-title">0723786541</h5>
                    </a>
                    </div>
                  </td>
                </tr>
                {}
              </tbody>
            </table>
          </div>



        </div>
      </div>
    </>
  );
}

export default ResponsiveWrapper(contact_us);
