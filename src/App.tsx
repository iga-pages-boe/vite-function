import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [apiResult, setApiResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleApiCall = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setApiResult(data.message);
    } catch (e) {
      console.error(e);
      setApiResult("Error: Failed to call API");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          onClick={handleApiCall}
          disabled={isLoading}
          className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white cursor-pointer"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          ) : (
            <div className="w-4 h-4 mr-2" />
          )}
          Execute API Call
        </button>
        {apiResult && (
          <div className="text-left">
            <p className="text-sm text-gray-400 mb-2">API Call Result:</p>
            <p className="text-green-400 font-mono bg-gray-800 px-3 py-2 rounded">
              {apiResult}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
