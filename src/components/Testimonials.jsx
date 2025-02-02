import React from 'react'

function Testimonials({data}) {
  return (
    <div>
      <h1 className='text-center pt-5'>What people are saying...</h1>
      <div className='d-flex flex-row'>
      {
        data.map((item,index)=>{
          return(
            <div className="card border-0 col" style={{width: "18rem"}} key={index}>
              <div className="d-flex justify-content-center align-items-center mt-3">
              <img src={item.image} className="card-img-top rounded-circle w-50" />
              </div>
              <div className="card-body d-flex flex-column  justify-content-center align-items-center text-center">
                <h5 className="card-title ">{item.name}</h5>
                <p className="card-text fs-4 w-75 text-center">{item.feedback}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Testimonials
