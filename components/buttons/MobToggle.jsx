import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const MobToggle = ({ link, text, type, onClick }) => {
    return (
        <button onClick={onClick}>
            <div className={`${type} flex flex-row items-center bg-red`}>
                <p className='flex justify-center items-center mb-[-3px] break-keep leading-[normal]'>
                    {text}
                </p>
            </div>
        </button >
    )
}

export default MobToggle;
