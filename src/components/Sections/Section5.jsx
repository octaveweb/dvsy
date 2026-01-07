import Img from '../Custome/Img'
import CardV4 from '../Cards/CardV4'
import Titel from '../Custome/Titel';
const Section5 = () => {

  const features = [
    {
      title: "INDEPENDENT DESIGNERS",
      description:
        "Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers.",
    },
    {
      title: "EXCLUSIVE & UNIQUITY",
      description:
        "Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.",
    },
  ];


  return (
    <>
      <Titel />
      <div className="section5">
        <Img url="https://i.ibb.co/HwMMgsm/image-461fde5a.png" />
        <div className="card-c">
          {features.map((elm, idx) => {
            return <CardV4 key={idx} data={elm} />
          })}
        </div>
      </div>
    </>
  )
}

export default Section5
