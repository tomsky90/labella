import Banner from "../../components/Banner/Banner";

// eslint-disable-next-line react/prop-types
const About = ({ heading, subheading }) => {
  return (
    <div>
      <Banner heading={heading} subheading={subheading} />
      about
    </div>
  );
};

export default About;
