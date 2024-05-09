import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/barbershop-4484300_1280.jpg";

const Prices = () => {
  return (
    <div>
      <Banner
        heading={"Offers & Prices"}
        subheading={"Check Out Our Offers"}
        img={bannerImg}
      />
    </div>
  );
};

export default Prices;
