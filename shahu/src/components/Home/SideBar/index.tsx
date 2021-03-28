import React from 'react'
import GlobalWrite from './GlobalWrite'
import ClubSliderList from './ClubSliderList'
import CreatorEntrance from './CreatorEntrance'
const SideBarIndex = () => {
  return (
    <div className="space-y-3">
      <GlobalWrite></GlobalWrite>
      <ClubSliderList></ClubSliderList>
      <CreatorEntrance></CreatorEntrance>
    </div>
  )
}

export default SideBarIndex
