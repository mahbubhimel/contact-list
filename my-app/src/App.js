import ContactListApiCall from "./components/ContactListApiCall";
import ContactDetails from "./components/ContactDetails";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CallUI from "./components/CallUI";
import AddContactDetails from "./components/AddContactDetails";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactListApiCall></ContactListApiCall>}></Route>
          <Route path="/details" element={<ContactDetails></ContactDetails>}></Route>
          <Route path="/callui" element={<CallUI></CallUI>}></Route>
          <Route path="addcontact" element={<AddContactDetails></AddContactDetails>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
