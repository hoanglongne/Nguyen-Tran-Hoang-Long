import React from "react";
import { PropagateLoader } from 'react-spinners';

function LoadingScene() {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#4c4c4c] bg-opacity-70">
          <PropagateLoader color="#ec838a" loading={true} size={35} speedMultiplier={0.8} />
      </div>
    );
  }
  
export default LoadingScene;