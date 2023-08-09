import React from 'react';
import { ContactCard } from './ContactCard';
import Yeung from '../Images/Yeung.png';
import Esposito from '../Images/Esposito.png';
import Rennie from '../Images/Rennie.png';
import Dao from '../Images/Dao.png';
import Kirksey from '../Images/Kirksey.png';

function Contact() {
  return (
    <div className="Contact" id='the-team'>
      <div >
        <h1 className='the-team'>The Team</h1>
      </div>
      <div className='main-container'>
        <ContactCard
          imgSource={Dao}
          imgAlt='Picture'
          name='Richard Dao'
          linkedin='https://www.linkedin.com/in/rdao'
          github='https://github.com/daorichard'
        />

        <ContactCard
          imgSource={Esposito}
          imgAlt='Picture'
          name='Eric Esposito'
          linkedin='https://www.linkedin.com/in/eric-andre-esposito'
          github='https://github.com/Ericesposito'
        />

        <ContactCard
          imgSource={Kirksey}
          imgAlt='Picture'
          name='Cameron Kirksey'
          linkedin='https://www.linkedin.com/in/cameronkirksey/'
          github='https://github.com/CameronKirksey21'
        />
        {/* </div>
      <div className='main-container'> */}
        <ContactCard
          imgSource={Rennie}
          imgAlt='Picture'
          name='Eric Rennie'
          linkedin='https://www.linkedin.com/in/ericmrennie/'
          github='https://github.com/ericmrennie'
        />

        <ContactCard
          imgSource={Yeung}
          imgAlt='Picture'
          name='Jason Yeung'
          linkedin='https://www.linkedin.com/in/jason-yeung-yat-shun/'
          github='https://github.com/JasonY000'
        />
      </div>
    </div>
  );
}

export default Contact;
