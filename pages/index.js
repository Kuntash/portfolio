import Head from 'next/head';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer/Footer';
import Heading from '../components/Heading/Heading';
import Navbar from '../components/Navbar/Navbar';

const Index = () => {
    return (
        <div className="bg-navy ">
            {/* Head component for NEXT.JS */}
            <Head>
                <title> Kunga Tashi </title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Heading />
            <Footer />
        </div>
    );
};

export default Index;
