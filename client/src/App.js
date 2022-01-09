import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LaunchWrapper from "./components/LaunchWrapper";
import Launch from "./components/Launch";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App p-5">
                    <h1>SpaceX GraphQL</h1>
                    {/* <LaunchWrapper /> */}
                    <Routes>
                        <Route path="/" element={<LaunchWrapper />} />
                        <Route path="/launches/:flight_number" element={<Launch />} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
