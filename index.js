$(document).ready(function () {
  let idCounter = 1;

  // Add Row button click event
  $("#addRow").click(function () {
    idCounter++;
    const newRow = `
                <tr>
            //ID
                    <td>${idCounter}</td>
            // NAZIV ARTIKLA
                    <td>
                        <input type="text"
                        class="form-control"
                        list="list-products"
                        id="naziv artikla" />
                    </td>
            //PAKIRANJE
                    <td>
                        <select
                            class="form-control form-select"
                            aria-label="Large select example"
                            id="pakiranje"
                            >
                            <option selected></option>
                            <option value="1">1.0</option>
                            <option value="2">0.7</option>
                        </select>
                    </td>
            //KOLIČINA
                    <td>
                    <input type="number" class="form-control" id="quantity" />
                    </td>
            //CIJENA
                    <td>
                    <input
                    type="number"
                    class="form-control"
                    id="cijena"
                    step="0.01"
                    />
                    </td>
            //UREĐIVANJE
                    <td>
                    <button class="btn btn-danger deleteBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-dash-circle-dotted"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"
                      />
                    </svg>
                  </button>
                    </td>
                </tr>`;
    $("tbody").append(newRow);
  });

  /*
  // EDIT button click event
  $("table").on("click", ".editBtn", function () {
    const row = $(this).closest("tr");
    const inputs = row.find("input");
    inputs.prop("disabled", !inputs.prop("disabled"));
  });
  */

  // Delete button click event
  $("table").on("click", ".deleteBtn", function () {
    $(this).closest("tr").remove();
  });
});

//AUTOCOMPLETE
document.addEventListener(
  "DOMContentLoaded",
  (e) => {
    $("#input-datalist").autocomplete();
  },
  false
);
//AUTOCOMPLETE

//Adresa
function readAddress() {
  var inputElement = document.querySelector("#narucitelj");

  if (inputElement) {
    if (inputElement.value === "CADCAM") {
      document.querySelector("#adresa").value = "Štoosova 1, 10 000 Zagreb";
    }
  }
}

setInterval(readAddress, 1000);
//Adresa

// Create JSON for Order Data

document
  .getElementById("inputFormOrderData")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //Get form values
    const prodavac = document.getElementById("prodavac").value;
    const narudzbaId = document.getElementById("id_narudzba").value;
    const narucitelj = document.getElementById("narucitelj").value;
    const datumNarudzbe = document.getElementById("datumNarudzbe").value;
    const datumDostave = document.getElementById("datumDostave").value;
    const adresaDostave = document.getElementById("adresa").value;

    //Create JSON object for Order data

    const orderData = {
      prodavac: prodavac,
      narudzbaId: narudzbaId,
      narucitelj: narucitelj,
      datumNarudzbe: datumNarudzbe,
      datumDostave: datumDostave,
      adresaDostave: adresaDostave,
    };

    // Redirect to narudzbe.html and pass JSON data as a query parameter
    var jsonSTRING = JSON.stringify(orderData);
    console.log(jsonSTRING);
    window.location.href = `narudzbe.html?data=${jsonSTRING}`;

    document.getElementById("inputFormOrderData").reset();
  });

// Create JSON for TABLE INPUTS

document
  .getElementById("inputFormTable")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values

    const nazivArtikla = document.getElementById("nazivArtikla").value;

    // Create JSON object

    const data = {
      nazivArtikla: nazivArtikla,
    };

    // Redirect to narudzbe.html and pass JSON data as a query parameter
    var jsonSTRING = JSON.stringify(data);

    console.log(jsonSTRING);
    window.location.href = `narudzbe.html?data=${jsonSTRING}`;

    document.getElementById("inputFormTable").reset();
  });

// Create JSON for TABLE INPUTS
