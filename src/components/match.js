import {MatchingImg} from './matchingImg'
import {MatchingFields} from './matchingFields'
import {MatchingDetails} from './matchingDetails'

import birdF from '../Bird_F.png'

export const Match = ({imgSrc, title, price}) => {
  
  const items = [{}, {}, {}]
  const fields = ['materials', 'size', 'weight', 'format', 'waterproof']
  const data = {
    materials: 'Plástico',
    size: '7,70 x 16,33 x 0,91',
    weight: '198 gr.',
    format: '19:9',
    waterproof: 'true',
    score: '8.7',
    title: 'Screen'
  }

  const fieldsPhoto = ['camera', 'frontalCamera', 'telephoto', 'focalAperture', 'wideAngle']
  const dataPhoto = {
    camera: '13 MP',
    frontalCamera: '8 MP',
    telephoto: 'false',
    focalAperture: '8 MP - 118',
    wideAngle: 'f/2.2',
    score: '8.3',
    title: 'Photography'
  }

  return(
  <li  className='match'>
    <section>
      <MatchingFields fields={[]} title='Items'/>
      {items.map(item => <MatchingImg imgSrc={birdF} title='BirdF' price='236' />)}
    </section>
    <section>
      <MatchingFields fields={fields} title='Screen'/>
      {items.map(item => <MatchingDetails fields={fields} data={data} />)}
    </section>
    <section>
      <MatchingFields fields={fieldsPhoto} title='Photography'/>
      {items.map(item => <MatchingDetails fields={fieldsPhoto} data={dataPhoto} />)}
    </section>
    <div className='match-footer'>
      <button>More details</button>
    </div>
  </li>
  )
}