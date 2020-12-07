import React from 'react';
import s from '../../styles/footer.module.css';
import target from './target@2x.png';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <img src={target} alt='target' className={s.footer__img} />
            <div className={s.footer_copywriteRoot}>
                <p className={s.footer_copywriteRoot__text}>© 2020 MODSHOP Clothing</p>
            </div>
        </footer>
    )
}

export default Footer;