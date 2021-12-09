import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 20;
    cursor: default;
`;

const ModalWrapper = styled.div`
    padding: 5%; 
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background:white;
    position: relative;
    z-index: 21;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
        /* height: 80vh; */
    }

    @media screen and (min-width: 1024px) {
        /* width: 60vw; */
    }

    @media screen and (min-width: 1200px) {
        /* width: 40vw; */
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Modal = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );


  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation} className='animated'>
            <ModalWrapper showModal={showModal}>
              
              <ModalContent>
                {children}
              </ModalContent>

            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;