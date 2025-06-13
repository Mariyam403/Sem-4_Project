// Create React app to pass color red , bg color yellow , fontsize 25px , fontstyle italic as property and apply css to 'LJ students' text return in p tag.

import Pb361app from "./Pb361app";

import React from 'react'

const Pb361test = () => {
    const mstyle = {color:'red' ,  bgcolor:'yellow' , fontsize:'25px' , fontstyle:'italic'}
  return (
      <Pb361app css={mstyle}/>
  )
}

export default Pb361test
