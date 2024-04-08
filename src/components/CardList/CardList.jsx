import "./CardList.css"
import Card from "../Card/Card"
import React from "react"

function CardList(props) {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="content">
      <ul className="cards" style={{'--scroll-progress': scrollProgress}}>
        {props.cards?.map(card => {
            return (
              <Card
                card={card}
                key={card._id}
              />
            )
          })}
      </ul>
    </main>
  )
}

export default CardList