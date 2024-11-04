
import {objTemplate} from '../../App'

interface BannerProps {
    list : objTemplate
}

function Banner(props: BannerProps) {
    const {list}=props;
    
  const {headerText, description, className} = list;
  const num = className.charAt(className.length-1);
  return (
    <div className={`common${num}`}>
    <div className={className}>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button> Show More </button>
    </div>
    </div>
  )
}

export default Banner