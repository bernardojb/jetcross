import React from 'react'
import { MobLink } from './MobLink'

const MobCTAText = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center lg:text-start text-center'>
            <p className='font-grotesk font-normal text-base text-text-secondary mr-5 pb-5 lg:pb-0'>Conheça o poder das nossas soluções para o seu negócio.</p>
            <MobLink
                link="/contato"
                text="Falar com especialista"
                icon="accent"
                type="link-accent"
            />
        </div>
    )
}

export default MobCTAText