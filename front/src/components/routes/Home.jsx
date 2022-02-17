import React,{useRef} from 'react'
import Fade from 'react-reveal/Fade';

function Home() {
  const sections = useRef();
  const onHomeClick = () => {
    sections.current.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className='Home'>
      <div ref={sections}></div>
      <h2>Titles</h2>
        <div className='sections'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi assumenda? Dolorum placeat quisquam adipisci distinctio alias minus illo. Autem dolores consequuntur recusandae rem, quibusdam error tenetur incidunt dolor assumenda cumque doloremque eum saepe sit vitae ipsa? Delectus quam, asperiores inventore et odit, esse error labore sed voluptas dolor reprehenderit, soluta quo temporibus dolorem velit saepe accusantium animi. Unde eligendi fugiat debitis! Perferendis, obcaecati possimus doloremque recusandae tempore quod similique placeat, dolor voluptates asperiores tenetur cupiditate? Reprehenderit nesciunt ea voluptatum neque libero repellendus, corrupti cupiditate magnam quo a! Molestiae quam, natus tempora minus deserunt quibusdam minima ut aliquid corporis qui.</div>
      <div className='sections'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi assumenda? Dolorum placeat quisquam adipisci distinctio alias minus illo. Autem dolores consequuntur recusandae rem, quibusdam error tenetur incidunt dolor assumenda cumque doloremque eum saepe sit vitae ipsa? Delectus quam, asperiores inventore et odit, esse error labore sed voluptas dolor reprehenderit, soluta quo temporibus dolorem velit saepe accusantium animi. Unde eligendi fugiat debitis! Perferendis, obcaecati possimus doloremque recusandae tempore quod similique placeat, dolor voluptates asperiores tenetur cupiditate? Reprehenderit nesciunt ea voluptatum neque libero repellendus, corrupti cupiditate magnam quo a! Molestiae quam, natus tempora minus deserunt quibusdam minima ut aliquid corporis qui.</div>
      <div className='sections'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, eligendi assumenda? Dolorum placeat quisquam adipisci distinctio alias minus illo. Autem dolores consequuntur recusandae rem, quibusdam error tenetur incidunt dolor assumenda cumque doloremque eum saepe sit vitae ipsa? Delectus quam, asperiores inventore et odit, esse error labore sed voluptas dolor reprehenderit, soluta quo temporibus dolorem velit saepe accusantium animi. Unde eligendi fugiat debitis! Perferendis, obcaecati possimus doloremque recusandae tempore quod similique placeat, dolor voluptates asperiores tenetur cupiditate? Reprehenderit nesciunt ea voluptatum neque libero repellendus, corrupti cupiditate magnam quo a! Molestiae quam, natus tempora minus deserunt quibusdam minima ut aliquid corporis qui.</div>
      <button onClick={onHomeClick}>dasdasd</button>

    </div>
  )
}

export default Home