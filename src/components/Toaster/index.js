import React from 'react';

import { ToastContainer } from 'react-toastify';

const Toaster = () => (
  <ToastContainer
    autoClose={5000}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default Toaster;
