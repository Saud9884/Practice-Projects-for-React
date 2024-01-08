import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const featureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags(){
       try {
        setLoading(true);
        const response = await featureFlagDataServiceCall();
        setEnabledFlags(response);
        setLoading(false);
        
       } catch (error) {
        console.log(error);
        setLoading(false);
       }
    }

    useEffect(() => {
      fetchFeatureFlags();
    }, [])
    
  return (
    <>
      <featureFlagContext.Provider value={{loading, enabledFlags}}>
        {children}
      </featureFlagContext.Provider>
    </>
  );
}
