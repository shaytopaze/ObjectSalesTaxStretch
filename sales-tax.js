var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

  // Add all of the elements together inside of the sales Array
function sum(arrayToBeSummed) {
  var total = arrayToBeSummed.reduce(function (a, b) {
    return a + b;
  }, 0)
return total;
}

function calculateSalesTax(salesData, taxRates) {
  var total = [];
  for (var index in companySalesData) { // Loop through objects in CompanySalesData Array
  var company = companySalesData[index];
  var totalSales = sum(company.sales); // Output the added elements of sales ---> Use sum() function to get total sales
    // console.log(totalSales);
    total.push(totalSales * salesTaxRates[company.province]);
  }
  return total;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);




