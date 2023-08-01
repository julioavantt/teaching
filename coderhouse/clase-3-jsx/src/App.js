import { Button } from "./components/Button";

const day = "MARTES";

export default function App() {
  return (
    <>
      {[1, 2, 4, 5, 6].map((item) => (
        <Button />
      ))}
      {day === "MARTES" ? (
        <button
          style={{
            backgroundColor: "red",
            borderRadius: 5,
            color: "#fe3456",
          }}
        >
          MARTES
        </button>
      ) : (
        <button>MIERCOLES</button>
      )}
    </>
  );
}
/* const handleDivertirse = () => alert();
  const dia = "miercoles";

  return (
    <form style={{ background: "red", fontSize: "2rem" }}>
      {["namecssss", "lastname", "age", "pepe"].map((name) => (
        <>
          <label>
            {name}
            <input type="text" name={name} />
          </label>
          <Button />
        </>
      ))}
      <mark>{dia === "martes" ? "es martes" : "es miercoles"}</mark>
      <h1     onClick={handleDivertirse}           className="pepe">
        TITLE
      </h1>
      <Button /><Button /><Button /><Button /><Button /><Button />
    </form>
  );
} */
