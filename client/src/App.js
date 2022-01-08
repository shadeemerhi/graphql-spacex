import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import LaunchWrapper from "./components/LaunchWrapper";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <h1>SpaceX GraphQL</h1>
                <LaunchWrapper />
            </div>
        </ApolloProvider>
    );
}

export default App;
