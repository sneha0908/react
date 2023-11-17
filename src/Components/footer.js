import React from 'react'
import './css/footer.css'
const Footer = () => {
    const year = new Date().getFullYear();
    const author="sneha";
    return(
        <footer className='para'>
            <p>&copy;{2023}{author}{year}.All rights resrved.</p>
            <p>Thanks for visiting my website!</p>
        </footer>
    );
}

export default Footer