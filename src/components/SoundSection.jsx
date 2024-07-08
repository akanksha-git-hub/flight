import baffle from "baffle";
import React, { useEffect, useRef } from "react";

export default function SoundSection() {

  const root = useRef()

  useEffect(() => {
    const text = baffle('.desc-A')

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
    <div ref={root} className="sound-section wrapper" style={{
      paddingInline: '50px'
    }}>
      <div className="body" style={{ width: '60ch', margin: '0', position: 'relative', top: '200px' }}>
        <span className="description desc-A" style={{color: '#FFFF', lineHeight: '124%', fontSize: '30px'}}>
        From rudimentary aircraft with simple engines to sophisticated planes with synchronized machine guns, the war accelerated the development of military aviation.
        </span>
      </div>
    </div>
  );
}
