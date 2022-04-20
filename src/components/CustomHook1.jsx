import UseFetch from "./hooks/UseFetch";
function CustomHook1() {

    const res = UseFetch('https://jsonplaceholder.typicode.com/posts', {})
    return res.isLoading ? <h3>Loading...</h3> : ( 
        <>
            {res.data.slice(-10).map(post=>{
                return (
                    <div key={post.id}> 
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </>
    );
}

export default CustomHook1;