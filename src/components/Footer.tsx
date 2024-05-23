import React from 'react';
import { FaBlog, FaTelegram, FaVk } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-black py-6 mt-auto'>
      <div className='container flex justify-between align-center flex-wrap gap-4'>
        <Link
          to={'/'}
          className='hover:opacity-70 transition-all'
        >
          <FaBlog
            color='#fff'
            size={20}
          />
        </Link>
        <div className='text-sm sm:text-md'>
          Development by Aleksandr Ostrovsqi
        </div>
        <div className='flex gap-5'>
          <a
            className='hover:opacity-70 transition-all'
            href='https://t.me/Al_ostrovskii'
          >
            <FaTelegram
              size={22}
              color='#fff'
            />
          </a>
          <a
            className='hover:opacity-70 transition-all'
            href='https://vk.com/al_ostrovsqi'
          >
            <FaVk
              size={22}
              color='#fff'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
