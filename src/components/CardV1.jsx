
const CardV1 = ({data}) => {
       
  return (
    <div className='card-v1 bg-[#1d1d1d] rounded'>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
         <button className=" text-white cursor-pointer" >
            <div className='flex justify-between items-center gap-3'>
              <i class="ri-arrow-right-up-line btn-c"></i>
                <p className="uppercase">Learn More</p>
            </div>
        </button>
    </div>
  )
}

export default CardV1
