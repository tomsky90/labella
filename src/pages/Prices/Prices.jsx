import Banner from "../../components/Banner/Banner";
import bannerImg from "../../assets/images/barbershop-4484300_1280.webp";
import offerimg from "../../assets/images/offers-card.webp";

const Prices = () => {
  return (
    <div>
      <Banner
        heading={"Offers & Prices"}
        subheading={"Check Out Our Offers"}
        img={bannerImg}
      />
      <section className="offers">
        <div className="offers__img-wrapper">
          <img className="offers__img" src={offerimg} alt="gift card" />
        </div>
      </section>
      <section className="prices">
        <table className="prices__table">
          <thead>
            <tr className="prices__table-head">
              <th className="prices__row">Our Standard Prices</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="prices__table-cell">Women&apos;s Haircut: £40</td>
            </tr>
            <tr>
              <td className="prices__table-cell">Men&apos;s Haircut: £20</td>
            </tr>
            <tr>
              <td className="prices__table-cell">Blowout and Styling: £35</td>
            </tr>
            <tr>
              <td className="prices__table-cell">
                Highlights (Full Head): £100
              </td>
            </tr>
            <tr>
              <td className="prices__table-cell">Balayage: £120</td>
            </tr>
            <tr>
              <td className="prices__table-cell">
                Hair Color (Root Touch-Up): £60
              </td>
            </tr>
            <tr>
              <td className="prices__table-cell prices__table-cell--last">
                Hair Extensions (Consultation Required): Starting from £200
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Prices;
