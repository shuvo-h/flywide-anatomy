import HeroSec from "../client/components/HeroSec/HeroSec";
import Layout from "../client/components/layout/LAyout";
import PopularDestinations from "../client/components/PopularDestinations/PopularDestinations";
import AllReviews from "../client/components/Reviews&Testimonials/Reviews&Testimonials";
import Services from "../client/components/Services/Services";
import StateSction from "../client/components/StateSction/StateSction";
export default function Home() {
  return (
    <Layout>
      <div>
        <HeroSec />
        <Services />
        <PopularDestinations />
        <StateSction />
        <AllReviews />
      </div>
    </Layout>
  );
}
