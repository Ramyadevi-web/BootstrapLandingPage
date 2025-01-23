import React from 'react'


function IconGrid({data}) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.map((item,index)=>{
            let Icon = item.icon;
        return(<div className="col mt-5 py-5" key={index}>
                <div className="card text-center no-border">
                  <div className="d-flex justify-content-center align-items-center mt-3">
                  <Icon size={50} color="#0d6efd"/>
                  </div>
                
                  <div className="card-body">
                      <h5 className="card-title  fs-3">{item.heading}</h5>
                      <p className="card-text fs-5 text-wrap text-break">{item.description}</p>
                  </div>
                </div>
               </div>);
     })}
    </div>
    
    
      
    </>
  )
}

export default IconGrid
