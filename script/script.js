fetch('db.json')
.then(res => res.json)
.then(data=>{document.getElementById("outpit").innerText=data.message;
})
.catch(error=>console.error("errorloading JSON",error));