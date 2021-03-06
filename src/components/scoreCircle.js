import {useState} from 'react'

export const ScoreCircle = ({score}) => {
    const [scoreDeg, setScoreDeg] = useState(-90)
    const style = {
        backgroundImage: 'linear-gradient(' + (scoreDeg > 90 ? 'to left, aquamarine 50%':'to right, white 50%') + ', transparent 50%), linear-gradient(' + scoreDeg +'deg' + ', white 50%, transparent 50%)'
    }
    const fillPercentage = (score * 36) - 90
    if (scoreDeg < fillPercentage)
        setTimeout(()=>setScoreDeg(scoreDeg + 3),10)

    return(
    <div className='score-circle-c' style={style}>
        <div>
            <h3>{score}</h3>
        </div>
    </div>
    )
}