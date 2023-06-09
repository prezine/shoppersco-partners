import React, { useState } from 'react'
import ButtonIcon from '../../Buttons/ButtonIcon'
import Greeting from '../../Header/Greeting'
import NewOrderPopUp from '../../PopUps/NewOrder/NewOrderPopUp'
import TemplatePage from '../../Template'
import InsightPartnerInventory from '../PartnerInventory/InsightPartnerInventory/InsightPartnerInventory'
import OrdersHistory from './OrdersHistory/OrdersHistory'

const Orders = () => {

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  const btn = <ButtonIcon handleClick={()=>setIsOrderModalOpen(true)} bgColor={'bg-brandGreen4x'} paddingX={'px-3'} text={'Order Bag'} textColor={'text-white'} />

  return (
    <TemplatePage headerTitle={'Orders'}>
      <Greeting salutationFontBigger useBtns headBtns={btn} salutation={'Manage the Inventory'} />

      <div className=''>
          <OrdersHistory />
      </div>

      <NewOrderPopUp key={'newOrderPopUp'} isModalOpen={isOrderModalOpen} closeModal={()=>setIsOrderModalOpen(false)} />
    </TemplatePage>
  )
}

export default Orders