import Bedroom from './BedRoom'
import Kitchen from './Kitchen'
import FullBath from './FullBath'
import LivingRoom from './LivingRoom'
import HalfBath from './HalfBath'

const FloorPlan = () => {
  return ( 
    <>
      <div className="fp">
        <Bedroom number={1} />
        <Kitchen />
        <FullBath />
        <Bedroom number={2} />
        <LivingRoom />
        <HalfBath />
        <Bedroom number={3} />
      </div>
    </>
  )
}

export default FloorPlan