import React from 'react'
import WiC from '../components/WiC/WiC'
import WorksComponent from '../components/Works/Works'


const Works = () => {
    return (
        <>
           {/* <Navbar />  RIMOSSO: la Navbar è già in App.jsx */}
           <WorksComponent />
           {/* footer removed: SmartLight and other pages use their own footers when needed */}
        </>
    )
}

export default Works
