import { faKorvue } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../src/styles/main.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="bg-navy min-h-screen flex justify-center items-center">
          <FontAwesomeIcon
            className="h-28 w-28 text-green animate-loader"
            icon={faKorvue}
          />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;
