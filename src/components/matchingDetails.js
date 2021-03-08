import {ScoreCircle} from './scoreCircle'

export const MatchingDetails = ({fields, data: {score, title, ...data}}) => {
    return(
    <section className='matching-item'>
        <h3>{title}</h3>
        <ScoreCircle score={score}/>
        <ul>
            {fields.map(field => <li>{data[field]}</li>)}
        </ul>
    </section>
    )
}