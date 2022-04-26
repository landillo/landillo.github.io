function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;

  let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function disableProductDiscount() {
  document.getElementById("inputCupon").disabled = false;
  document.getElementById("inputDiscount").disabled = true;
  document.getElementById("manualDiscount").disabled = true;
  document.getElementById("cuponDiscount").disabled = false;
}

function disableDiscountProduct() {
  document.getElementById("inputDiscount").disabled = false;
  document.getElementById("inputCupon").disabled = true;
  document.getElementById("cuponDiscount").disabled = true;
  document.getElementById("manualDiscount").disabled = false;
}
//  validar opcion del Select para ingresar el tipo de descuento

function getDropdownValue() {
  let inputValue = document.getElementById("opcionParaIngresarDescuento");
  let value = inputValue.options[inputValue.selectedIndex].value;
  let validarInputs = value;

  validarInputs == 1 ? disableProductDiscount() : disableDiscountProduct();

  return value;
}

function validar(input) {
  let value = getDropdownValue();
  alert(value);
}

// function habilitarInputs() {
//   document.getElementById("inputDiscount").disabled = false;
//   document.getElementById("inputCupon").disabled = false;
// }

function onClickButonPriceDiscount() {
  // const inputPrice = document.getElementById("inputPrice");
  const priceValue = parseInt(document.getElementById("inputPrice").value);

  // const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = parseInt(document.getElementById("inputDiscount").value);

  if (discountValue > priceValue) {
    alert("Lo siento, el descuento es imposible de aplicar");
    // const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText = "Lo siento el descuento excede el precio";
    console.log(discountValue);
    console.log(priceValue);
  } else {
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText =
      "El precio con descuento es: $" + precioConDescuento;
    console.log(discountValue);
    console.log(priceValue);
  }
}

//calcular el precio con el descuento de cupon

function calcularPrecioConCupon() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputCupon = document.getElementById("inputCupon");
  const discountCupon = inputCupon.value;

  const cupones = ["DESC10", "DESC25", "DESC50"];

  let descuento;

  switch (discountCupon) {
    case cupones[0]:
      descuento = 10;
      break;
    case cupones[1]:
      descuento = 25;
      break;
    case cupones[2]:
      descuento = 50;
      break;
  }

  if (
    discountCupon != cupones[0] &&
    discountCupon != cupones[1] &&
    discountCupon != cupones[2]
  ) {
    alert("el cupon " + discountCupon + " NO es valido, intenta con otro");
    const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText = "Cupon invaluido";
  } else {
    const precioConDescuento = calcularPrecioConDescuento(
      priceValue,
      descuento
    );

    const precioFinal = document.getElementById("precioFinal");
    precioFinal.innerText =
      "El precio con descuento es: $" + precioConDescuento;
  }
}
