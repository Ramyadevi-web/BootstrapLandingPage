import React from 'react'
import bgImage from '../assets/bg-masthead.jpg'

function Home({data}) {
  return (
    <>
    <div className="container-fluid p-0">
      <div 
      className="position-relative d-flex justify-content-center align-items-center text-center" 
      style={{
        backgroundImage: `url(${bgImage})`,
       height: "80vh"}}>
     
        <div className="text-white">
          <h1 className=' text-center'>{data}</h1>

            <form>
              <div className="mb-3 d-flex justify-content-center align-items-center p-5">
                <input
                  type="email"
                  className="form-control py-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email address"
                  style={{ width: "50%" }}
                />
                <button type="submit" className="btn btn-primary mx-4">
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
