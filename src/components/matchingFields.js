export const MatchingFields = ({title, fields}) => {
    return(
    <section className='matching-fields'>
        <h3>{title}</h3>
        <div className='score-circle-c'>
        </div>
        <ul>
            {fields.map(field => <li><h4>{field}</h4></li>)}
        </ul>
    </section>
    )
}