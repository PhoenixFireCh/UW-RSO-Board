import './Card.css';

const Card = (props) => {
  return (
    <div className='cardBody'>
        <img src= {props.image}></img>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href= {props.link}>More Information</a>
    </div>
  )
}

export default Card