import Head from 'next/head';
import Mediabar from '../components/Mediabar';
const Index = () => {
    return (
        <div className=" flex first-letter:bg-navy min-h-full ">
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
