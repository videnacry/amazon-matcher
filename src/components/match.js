import {MatchingImg} from './matchingImg'

import birdF from '../Bird_F.png'

export const ItemImage = ({imgSrc, title, price}) => {
  
  const items = [{}, {}, {}]

  return(
  <li  className='match'>
    {items.map(item => <MatchingImg imgSrc={birdF} title='BirdF' price='236'/>)}
    <div className='match-footer'>
      <button>More details</button>
    </div>
  </li>
  )
}