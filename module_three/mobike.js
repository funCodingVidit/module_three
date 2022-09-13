class Mobike {
  constructor(bikeNumber, phoneNumber, customerName, daysOfRent) {
      this.bikeNumber = bikeNumber;
      this.phoneNumber = phoneNumber;
      this.customerName = customerName;
      this.daysOfRent = daysOfRent;
  }

  compute() {
      if (this.daysOfRent == 0) {
          return 0;
      } else {
          if (this.daysOfRent > 0 || this.daysOfRent <= 5) {
              return 500 * this.daysOfRent;
          } else if (this.daysOfRent >= 6 || this.daysOfRent <= 10) {
              return 2500 + (400 *( this.daysOfRent - 5));
          } else {
              return 4500 + (200 * (this.daysOfRent - 10));
          }
      }
  }
}

module.exports.mobikes = Mobike;