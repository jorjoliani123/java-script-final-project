//ამით ჩემ შემთხვევაში ვთვლი პროდუქციის გვერდზე რამდენჯერ შევედი

let counterUser = sessionStorage.getItem("counter");

let newValue;

if (!counterUser) {
  newValue = 1;
} else {
  newValue = parseInt(counterUser) + 1;
}

sessionStorage.setItem("counter", newValue);

document.getElementById("count_visit").textContent =
  sessionStorage.getItem("counter");