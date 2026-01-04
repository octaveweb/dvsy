
function Section1() {
  return (
    <div className="section1 px-5 ">
        <div className="h-[93vh] bg-[url(../public/model.png)] bg-center bg-no-repeat bg-cover rounded-md p-12 flex justify-between  ">
        <div className="herosection">
          <div className=" text-white ">
           <h1 className="text-9xl">DESIGN <br /> &nbsp;&nbsp;&nbsp; & FREEDOM</h1>
        <p className="text-xl w-[80%] float-right py-6 text-gray-300"> Explore Independent Style by Embracing Uniqueness with Our Exclusive Designer Apparel</p>
        </div>

          <button className=" text-white cursor-pointer" >
            <div className='flex justify-between items-center gap-3'>
                <i className="ri-arrow-down-line btn-c" ></i>
                <p className="uppercase">Learn More</p>
            </div>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Section1