// Write your code here.
import './index.css'

const MainCardItems = props => {
  const {totalCardItems} = props
  const {title, description, imgUrl, className} = totalCardItems
  return (
    <li className={`${className} main-card-container`}>
      <div>
        <h1 className="main-title"> {title}</h1>
        <p className="main-para">{description}</p>
        <div className="image-card-container">
          <img src={imgUrl} className="image-card" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default MainCardItems
