import Country from "./Country/Country";
import Section from "./Section";

export const Countries = ({ countries }) => {
  return (
    <Section className="countries" sectionContainer="div">
      {countries.map((coutry) => (
        <Country key={coutry.cca3} {...coutry} />
      ))}
    </Section>
  );
};
