import { AuthProvider } from "./context/AuthContext";
import Home from "./screens/Home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
