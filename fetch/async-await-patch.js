async function patch() {
  let quotes = await fetch("https://mimic-server-api.vercel.app/quotes/38", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 38,
      author: "A.P.J. Abdul Kalam",
      quote:
        "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone",
    }),
  });

  if(!quotes.ok){
    throw new Error("uri invalid")
  }
  else{
    let data = await quotes.json();
    console.log(data);
  }
}

patch();
