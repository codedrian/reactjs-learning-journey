import { useState } from "react";

function MyForm() {
  const [firstName, setFirstName] = useState("");
  function handleSubmit(e){
  e.preventDefault();
  alert(`${firstName}`);
}
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <input type="submit"/>
    </form>
  );
}


export default function App() {
  return (
  <div>
    <h1>Form</h1>
    <MyForm />
  </div>
  );
}
