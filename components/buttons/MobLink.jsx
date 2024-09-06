import React from 'react'
import Link from 'next/link'

export const MobLink = ({ link, text, icon, type }) => {
    return (
        <Link href={link}>
            <div className={`${type} flex flex-row items-center group transition-all`}>
                <p className='flex justify-center items-center mb-[-3px] break-keep underline text-base text-primary whitespace-nowrap'>
                    {text}
                </p>
                <div className='h-[18px] w-[18px] ml-[10px] group-hover:rotate-45 group-hover:transition-all ease-out duration-200'>
                    {icon === "accent" ?
                        (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 11.5455L13 5L6.45454 5" stroke="#40FFE5" stroke-width="2" className='group-hover:stroke-[#fff] group-hover:transition-all ease-out duration-200' />
                                <path d="M13 5L5 13" stroke="#40FFE5" stroke-width="2" className='group-hover:stroke-[#fff] group-hover:transition-all ease-out duration-200' />
                            </svg>
                        ) : (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 11.5455L13 5L6.45454 5" stroke="#fff" stroke-width="2" className='group-hover:stroke-accent group-hover:transition-all ease-out duration-200'                                />
                                <path d="M13 5L5 13" stroke="#fff" stroke-width="2" className='group-hover:stroke-accent group-hover:transition-all ease-out duration-200'                                />
                            </svg>
                        )}
                </div>
            </div>
        </Link >
    )
}
