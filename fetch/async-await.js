async function quotes() {
  try {
    const response = await fetch("https://mimic-server-api.vercel.app/quotes");
    if(!response.ok){
        throw new Error("Error"+ response.status)
    }
    else{
        let data = await response.json();
        console.log(data);
    }
  } catch(err) {
    console.log(err.message);
  }
}
quotes();
