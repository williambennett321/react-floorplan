import React from 'react'
import Kitchen from "./Kitchen.js"
import Bedroom from "./Bedroom.js"
import Livingroom from "./Livingroom.js"
import Bath from "./Bath.js"

  
function FloorPlan(props) {
    return (

      
      <div id="floorplan">
        <Kitchen />
        <Bedroom bedNum={1} />
        <Bedroom bedNum={2} />
        <Bedroom bedNum={3} />
        <Livingroom />
        <Bath size= "half" />
        <Bath size= "full" />
      </div>
      
    );
  }

  export default FloorPlan;
