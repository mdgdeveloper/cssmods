import Image from "next/image";
import styles from "./Modal.module.css";
import newYear from '../../public/newYear.svg';

import { useState } from 'react';

const Modal = () => {
    const [modalState, setModalState] = useState('');

    const handleButton = () => {
        setModalState(styles.hidden);
    }
    
    const closeModal = () => {
        setModalState('');
    }
  
    return (
    <>
      <div id="button" className={styles.header}>
        <a href="#modal" className={styles.cta} onClick={handleButton}>
          Launch Modal
        </a>
      </div>
      <section id="#modal" className={`${styles.modal} ${modalState}`}>
        <div className={styles.modalContainer}>
          <figure className={styles.modalPicture}>
            <Image src={newYear} alt="" className={styles.modalImg} />
          </figure>
          <h2 className={styles.modalTitle}>
            Good Job!
            <span className={`${styles.modalTitle} ${styles.modalTitleBold}`}>
              Sergio
            </span>
          </h2>
          <p className={styles.modalParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sequi
            rem ea mollitia libero dolorem doloremque deserunt dolores quis
            ratione perferendis, consequuntur dicta fugit quaerat assumenda
            magni molestiae quisquam voluptatem!
          </p>

          <a href="#button" className={styles.modalClose} onClick={closeModal}>I agree</a>
        </div>
      </section>
    </>
  );
};

export default Modal;
