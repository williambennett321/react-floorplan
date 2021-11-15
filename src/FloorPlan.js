import React from 'react'
import Kitchen from "./Kitchen.js"
import Bedroom from "./Bedroom.js"
import Livingroom from "./Livingroom.js"
import BathOne from "./BathOne.js"
import BathTwo from "./BathTwo.js"
  
function FloorPlan(props) {
    return (

      
      <div id="floorplan">
        <Kitchen />
        <Bedroom />
        <Livingroom />
        <BathOne />
        <BathTwo />
      </div>
      
    );
  }

  export default FloorPlan;
