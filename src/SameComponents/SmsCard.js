import React from 'react'

export const SmsCard = ({ img, length, price, pOne, pTwo, pThree, pFour, pFive }) => {
    return (
        <>
      
       <img className='mb-3' src={img} style={{ maxWidth: '80px',maxHeight:"80px" }} alt="" />
                <h5 style={{color:'#626262'}}>{length}</h5>
                <p>{pOne}</p>
                <p>{pTwo}</p>
                <p>{pThree}</p>
                <p>{pFour}</p>
                <p>{pFive}</p>
                <h4>{price}</h4>
                <button type='button' className='border-0  text-white mt-2 px-3 py-2 rounded-3' style={{ backgroundColor: '#903519' }}>Buy Now</button>
            

               
        </>
    )
}
