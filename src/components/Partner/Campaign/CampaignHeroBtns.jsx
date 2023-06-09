import React from 'react'
import ButtonIcon from '../../Buttons/ButtonIcon'

const CampaignHeroBtns = ({handleClick}) => {
  return (
    <>
        <ButtonIcon text={'New Campaign'} handleClick={handleClick} textColor={'text-white'} paddingX={'px-2 sm:px-5 lg:px-8'} bgColor={'bg-brandGreen4x'} flexDirection={'flex-row'} fontSize={'text-sm md:text-base'} />
    </>
  )
}

export default CampaignHeroBtns