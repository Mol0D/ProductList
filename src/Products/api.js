const api = () =>{
    return fetch(`http://localhost:3001/products`)
                    .then(res => res.json())
                        
}

export default api;