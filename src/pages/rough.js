let dataSaved;
fetch("https://opentdb.com/api.php?amount=5").then(
    data=>data.json()
).then(data=>{dataSaved=data})