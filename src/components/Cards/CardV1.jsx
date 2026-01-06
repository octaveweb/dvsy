
const CardV1 = ({ data }) => {

  return (
    <div className="card-v1">
      <h3>{data.title}</h3>
      <p>{data.description}</p>

      <button>
        <div className="btn-inner">
          <i className="ri-arrow-right-up-line btn-c"></i>
          <p>Learn More</p>
        </div>
      </button>
    </div>

  )
}

export default CardV1
