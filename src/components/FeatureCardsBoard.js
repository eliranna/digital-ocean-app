import React from 'react'
import CardsBoard from '../common/shared/CardsBoard'
import FeatureCard from './FeatureCard'

const FeatureCardsBoard = ({features}) => {
    return (
        <CardsBoard>
            {features.map((feature, index) => {
                return <FeatureCard key={index} icon={feature.icon} title={feature.title} desc={feature.desc}/>
            })}
        </CardsBoard>
    )
}

export default FeatureCardsBoard