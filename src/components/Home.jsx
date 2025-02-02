import React from 'react'
import bgImage from '../assets/bg-masthead.jpg'

function Home({data}) { 
  let homeHeading = data[0];
  return (
   
    <>
    <div className="p-0 m-0">
      <div 
      className=" position-relative d-flex flex-column justify-content-center align-items-center text-center" 
      style={{
        backgroundImage: `url(${bgImage})`,
        background: "linear-gradient(180deg, rgba(189,198,215,1) 0%, rgba(58,82,116,1) 100%)",
       height: "80vh"}}>
     
        <div className="text-white">
          <h1 className={`${homeHeading.flag?"custom-size" :""}`}>{homeHeading.description}</h1>
        </div>
        <div>
            <form>
              <div className="mb-3 d-flex justify-content-center align-items-center py-5">
                <input
                  type="email"
                  className="form-control py-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  style={{ width: "25rem" }}
                />
                <button type="submit" className="btn btn-primary mx-4 py-3 px-4">
                  Submit
                </button>
              </div>
            </form>  
      </div>
    </div>
    </div>

    </>
  )
}

export default Home
