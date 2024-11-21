import React from 'react'
import AnimatedButton from './AnimatedButton'

const AppDevlopment = () => {
    return (
        <div className="appDevlopment" style={{ backgroundColor: '#903519' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h3 className='fw-bold text-white fs-2'>ARE YOU LOOKING FOR APP DEVELOPMENT?</h3>
                    </div>
                    <div className="col-md-3">
                        <AnimatedButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDevlopment