// import CustomHook1 from "./components/CustomHook1";
// import CustomHook2 from "./components/CustomHook2";
import LocalStorageTest from "./components/LocalStorageTest";
// import UseCallbackExample from "./components/UseCallbackExample";
// import UseMemoExample from "./components/UseMemoExample";
// import UseRefExample from "./components/UseRefExample";

function App() {
    return ( 
        <>
            {/* <div className="container mt-5">
                <h2 className="text-center">*****UseRef*****</h2>
                <UseRefExample />
            </div>
            <div className="container mt-5">
                <h2 className="text-center">*****UseMemo*****</h2>
                <UseMemoExample />
            </div>
            <div className="container mt-5">
                <h2 className="text-center">*****UseCallback*****</h2>
                <UseCallbackExample />
            </div>
            <div className="container my-5">
                <h2 className="text-center">*****CustomHook1*****</h2>
                <CustomHook1 />
            </div> */}
            {/* <div className="container my-5">
                <h2 className="text-center">*****CustomHook2*****</h2>
                <CustomHook2 />
            </div> */}
            <div className="container my-5">
                <h2 className="text-center">*****Local Storage test*****</h2>
                <LocalStorageTest />
            </div>
        </>
     );
}

export default App;