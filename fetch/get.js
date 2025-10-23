fetch("https://mimic-server-api.vercel.app/quotes/2")
.then((response)=> response.json())
.then((data)=> console.log(data))
