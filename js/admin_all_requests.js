const token = localStorage.getItem("token");

fetch(
 "https://andela-maintenance-tracker-api.herokuapp.com/api/v1/requests",
 {
   headers: {
     Authorization: "Bearer " + token
   }
 }
)
 .then(res => res.json())
 .then(data => {
   let table = document.getElementById("table");

   let _list = data.requests;
   let count;

   console.log(_list);

   for (count = 0; count < _list.length; count++) {
     let row = table.insertRow(count);

     let title = row.insertCell(0);
     let description = row.insertCell(1);
     let type = row.insertCell(2);
     let category = row.insertCell(3);
     let status = row.insertCell(4);

     title.innerHTML = _list[count]["title"];
     description.innerHTML = _list[count]["description"];
     type.innerHTML = _list[count]["type"];
     category.innerHTML = _list[count]["category"];
     status.innerHTML = _list[count]["status"];
   }
 });


