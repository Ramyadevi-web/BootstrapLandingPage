import React from 'react'

function Showcase({data}) {
  return (
  // <div className='container-fluid'>
    <div className="row-cols-1 g-4">
    {data.map((item, index) => {
      
      const isEven = index % 2 === 0; // Check if the index is even
  
      return (
        <div className="col  mt-0" key={index}  >
          <div className={`row d-flex ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="p-0 col-12 col-lg-6 d-flex align-items-center justify-content-center  flex-fill">
              <img src={item.image} className="image-fluid w-100"/>
            </div>
            <div className="p-0 my-5 py-5 col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center text-center"  style={{ minHeight: '100%' }}>
              <h5 className="fs-3 fw-bold">{item.heading}</h5>
              <p className="fs-3 fs-3 w-75 text-center">{item.description}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div> 
  // </div> 
  )
}

export default Showcase
