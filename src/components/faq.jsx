import { ResponsiveWrapper } from "../hoc";
import faqData from '../constants';
import { BsArrowLeftCircle } from 'react-icons/bs';


function FAQ() {
  return (
    <div className="bg-[#2a4454] w-full h-full mx-auto">
      <a className='cursor-pointer p-10px custom-button'><BsArrowLeftCircle className='py-[10px] pl-[10px] text-white text-[60px]'/></a>

      <div className='bg-white w-full h-full mt-10 rounded-[20px] flex flex-col items-center custom-container '>
        <h1 className='pt-[25px] pb-[5px] text-[20px] font-bold' >FAQS</h1>

        {faqData.map((faq, index) => (
          <div key={index} className="flex flex-col py-20px">
            <div className="flex flex-row pt-[10px] pb-[5px] px-[15px]" >
            <h2 className='text-[#2563eb]'>Q:&nbsp;</h2>
              <h3>{faq.question}</h3>
            </div>
              <div className="flex flex-row px-[15px] pb-[20px] pt-0">
                <h2 className='text-[#2563eb]'>A:&nbsp;</h2>
                <p className='text-[#6b7280]'>{faq.answer}</p>
              </div>
            
            <hr className='p-15px'/>
          </div>
          ))}
        <hr/>
      </div>
    </div>
  )
}

export default ResponsiveWrapper(FAQ);