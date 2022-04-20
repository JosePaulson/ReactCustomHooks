import UseMemoExample from "./components/UseMemoExample";
import UseRefExample from "./components/UseRefExample";

function App() {
    return ( 
        <>
            <div className="container mt-5">
                <h2 className="text-center">*****UseRef*****</h2>
                <UseRefExample />
            </div>
            <div className="container mt-5">
                <h2 className="text-center">*****UseMemo*****</h2>
                <UseMemoExample />
            </div>
        </>
     );
}

export default App;