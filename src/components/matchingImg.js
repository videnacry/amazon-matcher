import {ScoreCircle} from './scoreCircle'

export const MatchingImg = ({imgSrc, title, price}) => {
    return(
    <article className='matching-item'>
        <div className='flex-row content-space-between'>
            <button>-</button>
            <button>buy</button>
            </div>
                <img src={imgSrc} alt='' width='100%'/>
            <div>
            <h3 className='item-title'>{title}</h3>
            <p className='item-price'>{price}</p>
            <ScoreCircle score='9.3'/>
        </div>
    </article>
    )
}