import baffle from 'baffle';
import React, { useEffect, useRef } from 'react'

export default function DisplaySection() {
  const root = useRef()

  useEffect(() => {
    const text = baffle('.desc-B')

    text.set({
      characters:'A$\|/INI @/|\\3n 4|3#1L4$#}[\/░▓▓ 69>▓█/:)▒ /<░▒▒ ▒░█ ▒█69<▒▓ ▓▓?7]1*&420{▒▓ ▒▒░ ▒█▓█ █▒░░$%}!@^?.< ',
       speed: 60,
     });

     const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          text.start()
          text.reveal(500,500)     
          observer.disconnect(root.current)
        }
      })
    }, { threshold: 0.2})
    observer.observe(root.current)

  }, [])

  return (
    <div ref={root} className="display-section wrapper"style={{
      paddingInline: '50px',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'end'
    }}>
      <div className="body" style={{ width: '60ch', margin: '0', position: 'relative', top: '200px' }}>
        <span className="description desc-B" style={{color: '#FFFF', lineHeight: '124%', fontSize: '30px'}}>
        From pre-flight checks to engaging in aerial combat, pilots had to rely on their wits, skills, and the reliability of their aircraft to survive each mission.
        </span>
      </div>
    </div>
  )
}
