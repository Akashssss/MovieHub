
import Card from "./Components/Card";



export default function Movies({movies}) {

    
  return (
      <div>
          {movies.map((item) => (
              <Card movie={item.show} key={item.show.id} />
          ))}
      </div>
  )
}
