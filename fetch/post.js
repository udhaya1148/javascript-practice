fetch("https://mimic-server-api.vercel.app/quotes",{
    method: "Post",
    headers:{
        "content-Type": "application/json"
    },
    body: JSON.stringify({
        id:39,
        author:'A.P.J. Abdul Kalam',
        quote:"Dream is not that which you see while sleeping it is something that does not let you sleep."
    })
})

.then((response)=>response.json())
.then((data)=> console.log(data))