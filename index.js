// run `node index.js` in the terminal

const userBike = require('./module_three/mobike.js');
const readline = require('readline');
const file = require('fs');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let customer = [];
const mo = new userBike.mobikes();

r1.question('1. New User\n2. Existing User\n', (choice) => {
  switch (choice) {
    case '1':
      createUser();
      break;
    case '2':
      showRentalDetails();
      break;
    default:
      console.log('Choice not found');
  }

  function createUser() {
    r1.question(
      'Enter the following information\nEnter your name: ',
      (customerName) => {
        mo.customerName = customerName;
        r1.question('Enter your phone number: ', (phoneNumber) => {
          mo.phoneNumber = phoneNumber;
          r1.question('Enter your bike number', (bikeNumber) => {
            mo.bikeNumber = bikeNumber;
            r1.question(
              'Enter the days you want to rent the bike',
              (daysOfRent) => {
                mo.daysOfRent = daysOfRent;

                //calculate rental charge
                mo.rentalCharge = mo.compute();

                customer = {
                  customerName: mo.customerName,
                  phoneNumber: mo.phoneNumber,
                  bikeNumber: mo.bikeNumber,
                  daysOfRent: mo.daysOfRent,
                  rentalCharge: mo.rentalCharge,
                };

                const data = JSON.stringify(customer, null, 2);

                console.log(
                  '\nUser info with rental charge:' +
                    '\nName: ' +
                    customer.customerName +
                    '\nPhone number: ' +
                    customer.phoneNumber +
                    '\nBike number: ' +
                    customer.bikeNumber +
                    '\n\nRental charge: ' +
                    customer.rentalCharge
                );
                file.writeFile('user.json', data, (err) => {
                  if (err) console.log('Something went wrong!');
                  console.log('Data saved');
                });
                r1.close();
              }
            );
          });
        });
      }
    );
  }
});
