import './Testimonials.css';
import next_icon from '../../assets/images/next-icon.png';
import back_icon from '../../assets/images/back-icon.png';
import user_1 from '../../assets/images/user-1.png';
import user_2 from '../../assets/images/user-2.png';
import user_3 from '../../assets/images/user-3.png';
import user_4 from '../../assets/images/user-4.png';
import { useRef } from 'react';

const Testimonials = () => {
  const slider = useRef();
  let translateX = 0;

  const slideForward = () => {
  if (translateX > -50) {
    translateX -= 25;
  }
  slider.current.style.transform = `translateX(${translateX}%)`
}
  const slideBackward = () => {
    if (translateX < 0) {
    translateX += 25;
  }
  slider.current.style.transform = `translateX(${translateX}%)`
  }

  return (
    <div className='testimonials'>
      <img 
        src={next_icon}
        alt=''
        className='next-btn'
        onClick={slideForward}
      />
      <img 
        src={back_icon}
        alt='back-icon'
        className='back-btn'
        onClick={slideBackward}
      />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-infor'>
                <img
                  src={user_1}
                  alt='user picture'
                />
                <div>
                  <h3>William Jackson 1</h3>
                  <span>Bowen University, Nigeria</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Bowen University was one of the
                best decisions I have ever made . The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-infor'>
                <img
                  src={user_2}
                  alt='user picture'
                />
                <div>
                  <h3>William Jackson 2</h3>
                  <span>Bowen University, Nigeria</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Bowen University was one of the
                best decisions I have ever made . The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-infor'>
                <img
                  src={user_3}
                  alt='user picture'
                />
                <div>
                  <h3>William Jackson 3</h3>
                  <span>Bowen University, Nigeria</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Bowen University was one of the
                best decisions I have ever made . The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-infor'>
                <img
                  src={user_4}
                  alt='user picture'
                />
                <div>
                  <h3>William Jackson 4</h3>
                  <span>Bowen University, Nigeria</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Bowen University was one of the
                best decisions I have ever made . The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
