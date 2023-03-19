import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { startWorker } from "./mocks";

import { PokemonService, OpenAPI } from "./services/openapi";
import PokemonComponent from "./components/Pokemon";

const queryClient = new QueryClient();
OpenAPI.BASE = "https://localhost:7092";

if (process.env.NODE_ENV === "development") {
  startWorker();
}

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
function Todos() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { isLoading, isError, data, error } = useQuery(
    "weatherData",
    PokemonService.getWeatherForecast
  );

  if (isLoading) {
    return <h5>Loading...</h5>;
  }
  if (isError) {
    console.log(error);
    return <h5>Error loading data</h5>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {data?.map((pokemon) => (
        <PokemonComponent pokemon={pokemon} />
      ))}
    </div>
  );
}
export default App;
