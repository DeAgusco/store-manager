import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from '@/common/Loader';
import Dashboard from './containers/Dashboard';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/dashboard"
          element={<Dashboard />}
        />
        {/* <Route path="/calendar" element={} /> */}
        
      </Routes>
    </>
  );
}

export default App;
