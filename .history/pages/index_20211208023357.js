import Head from 'next/head';
const Index = () => {
    return (
        <div className="">
            <Head>
                <title>| Kunga Tashi |</title>
                <link rel="icon" type="image/x-icon" href="../favicon.ico" />
            </Head>
            <h1 className="text-5xl"> Hello</h1>
            <img src="assets/images/stock-profile.jpg" alt="profile" />
        </div>
    );
};

export default Index;
