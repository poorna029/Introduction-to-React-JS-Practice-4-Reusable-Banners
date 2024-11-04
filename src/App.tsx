import Banner  from './components/Banner/Banner';
import './App.css'

export interface objTemplate {
  id:number; 
  headerText:string ; 
  description:string; 
  className:string;
}

const bannerCardsList : objTemplate [] = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

function App() {


  return (
    <>
     
      
      
       { bannerCardsList.map(c=><Banner list={c} key = {c.id} />)}
      
    </>
  )
}

export default App
