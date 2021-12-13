import Head from 'next/head';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer/Footer';
const Heading = dynamic(() => import('../components/Heading/Heading'), {
    ssr: false,
});
const Navbar = dynamic(() => import('../components/Navbar/Navbar'), {
    ssr: false,
});

const Index = () => {
    return (
        <div className="bg-navy ">
            {/* Head component for NEXT.JS */}
            <Head>
                <title>| Kunga Tashi |</title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="images/favicon.ico"
                />
            </Head>

            <Navbar />
            <Heading />
            <Footer />
        </div>
    );
};

export default Index;
