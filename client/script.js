const apiUrl = "https://localhost:7163/api/Magazyn";

// Function - Populate html table with fetched data
async function buildTable(arr) {
  var table = document.getElementById("myTable");
  for (i = 0; i < arr.length; i++) {
    var row = `<tr class="item-row">
                <td>${arr[i].id}</td>
                <td>${arr[i].category}</td>
                <td>${arr[i].model}</td>
                <td>${arr[i].serialNumber}</td>
                <td>${arr[i].warehouse}</td>
              <tr>`;
    table.innerHTML += row;
  }
}

// Function - Fetch data from API
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    buildTable(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function - Add data to db
async function addItem(item) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    console.log("Item added successfully:", data);
  } catch (error) {
    console.error("Error adding item:", error);
  }
}

// Function to delete an item from the API
async function deleteItem(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Item deleted successfully:", data);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}

fetchData();

const addItemButton = document.querySelector(".add-item");
const deleteItemButton = document.querySelector(".delete-item");
const addSubmitButton = document.querySelector("#submit");

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close");

addItemButton.addEventListener(
  "click",
  (openModal = () => {
    modal.classList.toggle("hidden");
  })
);

deleteItemButton.addEventListener("click", () => {
  const id = prompt();
  if (id != null) deleteItem(id);
});

closeButton.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

addSubmitButton.addEventListener("click", () => {
  const newItem = {
    category: document.querySelector("#category").value,
    model: document.querySelector("#model").value,
    serialNumber: document.querySelector("#sn").value,
    warehouse: document.querySelector("#warehouse").value,
  };
  addItem(newItem);
});
