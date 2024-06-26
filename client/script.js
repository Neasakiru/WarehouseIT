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

// Function - Update data in db
async function updateItem(id, item) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    console.log("Item updated successfully:", data);
  } catch (error) {
    console.error("Error updating item:", error);
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
const modifyItemButton = document.querySelector(".modify-item");
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

// modifyItemButton.addEventListener(
//   "click",
//   ( modifyItem = () => {
//     const id = prompt();
//     if(id != null)
//     modal.classList.toggle("hidden");

//   })
// );

deleteItemButton.addEventListener(
  "click",
  (deleteItem = () => {
    const id = prompt();
    if (id != null) deleteItem(id);
  })
);
closeButton.addEventListener(
  "click",
  (closeModal = () => {
    modal.classList.toggle("hidden");
  })
);
addSubmitButton.addEventListener(
  "click",
  (submitAdd = () => {
    const newItem = {
      category: document.querySelector("#category").value,
      model: document.querySelector("#model").value,
      serialNumber: document.querySelector("#category").value,
      warehouse: document.querySelector("#category").value,
    };
    addItem(newItem);
  })
);

// const itemIdToUpdate = "a12fb55f-88b6-4b85-b9cb-851eda4ace4a"; // Replace with the actual item ID
// const updatedItem = {
//   category: "Ele",
//   model: "Updated Smartphone",
//   serialNumber: "654321",
//   warehouse: "B2",
// };
// updateItem(itemIdToUpdate, updatedItem);
