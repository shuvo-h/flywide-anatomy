import HeroSec from "../client/components/HeroSec/HeroSec";
import Layout from "../client/components/layout/LAyout";
import Services from "../client/components/Services/Services";

export default function Home() {
  return (
    <Layout>
      <div>
        <HeroSec />
        <Services />
      </div>
    </Layout>
  );
}
