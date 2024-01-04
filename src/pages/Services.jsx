import Footer from "../components/Footer";
import ServiceDetail from "../components/ServiceDetail";
import { services } from "../data/Services";

export default function Services() {
  return (
    <>
      <div className="mt-10">
        {services.slice(0, 4).map((service, index) => (
          <ServiceDetail
            service={service}
            isReverse={index % 2 !== 0}
            key={index}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
