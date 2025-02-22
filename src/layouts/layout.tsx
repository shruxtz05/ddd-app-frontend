import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header & Hero Section */}
      <Header />
      {showHero && <Hero />}

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto py-10">{children}</div>
      </main>

      {/* Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
