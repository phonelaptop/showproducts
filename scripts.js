fetch("https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let template = "";
    let templateto = "";

    for (let i = 0; i < data.length; i++) {
      const datum = data[i];
      console.log(datum);
      templateto += `
    <tr>
      <td>${datum.id}</td>
      <td>${datum.name}</td>
      <td>${datum.description}</td>
      <td>${datum.price}</td>
    </tr>

       `;
    }
    template = `
      <table class="table">
        <thead class = "table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody> ${templateto} </tbody>
      </table>`;
    
    document.querySelector("#container").innerHTML = template;
  });
