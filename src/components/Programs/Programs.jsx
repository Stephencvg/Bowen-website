import './Programs.css';
import program_1 from '../../assets/images/graduation1.webp';
import program_2 from '../../assets/images/graduation5.jpg';
import program_3 from '../../assets/images/graduation4.webp';
import program_icon_1 from '../../assets/images/program-icon-1.png';
import program_icon_2 from '../../assets/images/program-icon-2.png';
import program_icon_3 from '../../assets/images/program-icon-3.png';

const Programs = () => {
  return (
    <div className='programs '>
      <div className='program'>
        <img className='program-image'
          src={program_1}
          alt='program-logo'
        />
        <div className='caption'>
          <img
            src={program_icon_1}
            alt='caption-icon'
          />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img className='program-image'
          src={program_2}
          alt='program-logo'
        />
        <div className='caption'>
          <img
            src={program_icon_2}
            alt='caption-icon'
          />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className='program'>
        <img
          src={program_3}
          alt='program-logo'
        />
        <div className='caption'>
          <img
            src={program_icon_3}
            alt='caption-icon'
          />
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
