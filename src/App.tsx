import React from "react";
import { useQuery } from "@tanstack/react-query";
import LoadingBar from "react-top-loading-bar";

const fetchData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
};

const App = () => {
  const [progress, setProgress] = React.useState(0);
  const loadingBar = React.useRef(null);

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  React.useEffect(() => {
    if (isLoading) {
      // If still loading, start the loading bar
      loadingBar.current?.continuousStart();
    } else {
      // If loading is complete, stop the loading bar
      loadingBar.current?.complete();
    }
  }, [isLoading]);

  return (
    <div>
      <LoadingBar
        color="#f11946"
        ref={loadingBar}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Product List</h1>
          <ul>
            {data?.products?.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
