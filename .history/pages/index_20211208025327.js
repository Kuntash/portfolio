import Head from 'next/head';
import Mediabar from '../components/Mediabar';
const Index = () => {
    return (
        <div className= "bg-navy">
            <Head>
                <title>| Kunga Tashi |</title>
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="images/favicon.ico"
                />
            </Head>
            <Mediabar />
        </div>
    );
};

export default Index;
