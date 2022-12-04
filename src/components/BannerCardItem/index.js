// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {list} = props
  const {headerText, description, className} = list
  console.log(className)

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p>{description}</p>
        <button className="but">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
