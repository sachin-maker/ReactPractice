import useFetch from "./index"



const UseFetchHookTest=()=>{
    // const {data,loading,error}=useFetch("https://dummyjson.com/products",{});

    const { data, error, loading } = useFetch(
        "https://dummyjson.com/products"
      );

    console.log(data,loading,error)
    return (
        <div>
        <h1>Use Fetch Hook</h1>
        {loading ? <h3>Loading ! Please wait</h3> : null}
        {error ? <h3>{error}</h3> : null}
        {data && data.products && data.products.length
          ? data.products.map((productItem) => (
              <p key={productItem.key}>{productItem.title}</p>
            ))
          : null}
      </div>
    );
  }
export default UseFetchHookTest