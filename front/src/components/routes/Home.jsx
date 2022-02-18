import React, { useRef } from 'react'
import Fade from 'react-reveal/Fade';

function Home() {
  const sections2 = useRef();
  const sections3 = useRef();

  const onsections2 = () => {
    sections2.current.scrollIntoView({ behavior: 'smooth' });
  };
  const onsections3 = () => {
    sections3.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='Home'>
      <h2>Titles</h2>
      <div className='sections'>
        <Fade left>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi assumenda? Dolorum placeat quisquam adipisci distinctio alias minus illo. Autem dolores consequuntur recusandae rem, quibusdam error tenetur incidunt dolor assumenda cumque doloremque eum saepe sit vitae ipsa? Delectus quam, asperiores inventore et odit, esse error labore sed voluptas dolor reprehenderit, soluta quo temporibus dolorem velit saepe accusantium animi. Unde eligendi fugiat debitis! Perferendis, obcaecati possimus doloremque recusandae tempore quod similique placeat, dolor voluptates asperiores tenetur cupiditate? Reprehenderit nesciunt ea voluptatum neque libero repellendus, corrupti cupiditate magnam quo a! Molestiae quam, natus tempora minus deserunt quibusdam minima ut aliquid corporis qui. </Fade>
      <button onClick={onsections2}>dasdasd</button>
      </div>
      <div ref={sections2} className='sections'>
        <Fade right>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi assumenda? Dolorum placeat quisquam adipisci distinctio alias minus illo. Autem dolores consequuntur recusandae rem, quibusdam error tenetur incidunt dolor assumenda cumque doloremque eum saepe sit vitae ipsa? Delectus quam, asperiores inventore et odit, esse error labore sed voluptas dolor reprehenderit, soluta quo temporibus dolorem velit saepe accusantium animi. Unde eligendi fugiat debitis! Perferendis, obcaecati possimus doloremque recusandae tempore quod similique placeat, dolor voluptates asperiores tenetur cupiditate? Reprehenderit nesciunt ea voluptatum neque libero repellendus, corrupti cupiditate magnam quo a! Molestiae quam, natus tempora minus deserunt quibusdam minima ut aliquid corporis qui.</Fade>
      <button onClick={onsections3}>dasdasd</button>
      </div>
      <div ref={sections3} className='sections'>
        <Fade left>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi assumenda? Dolorum placeat quisquam adipisci distinctio alias minus illo. Autem dolores consequuntur recusandae rem, quibusdam error tenetur incidunt dolor assumenda cumque doloremque eum saepe sit vitae ipsa? Delectus quam, asperiores inventore et odit, esse error labore sed voluptas dolor reprehenderit, soluta quo temporibus dolorem velit saepe accusantium animi. Unde eligendi fugiat debitis! Perferendis, obcaecati possimus doloremque recusandae tempore quod similique placeat, dolor voluptates asperiores tenetur cupiditate? Reprehenderit nesciunt ea voluptatum neque libero repellendus, corrupti cupiditate magnam quo a! Molestiae quam, natus tempora minus deserunt quibusdam minima ut aliquid corporis qui. </Fade>
      </div>

    </div>
  )
}

export default Home