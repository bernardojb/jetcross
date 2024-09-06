"use client";
import { useState, useEffect } from "react";

const SplashScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some async task, like fetching data or loading resources
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    // Cleanup function
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Loading...</h1>
    </div>
  ) : (
    <>{children}</>
  );
};

export default SplashScreen;
