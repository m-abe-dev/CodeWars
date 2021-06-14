// Best Practice
const quarterOf = m => Math.ceil(m/3);

// Second Best Practice
const quarterOf = (month) => {
    if (month <= 3) {
      return 1
    } else if (month <= 6) {
      return 2
    } else if (month <= 9) {
      return 3
    } else if (month <= 12) {
      return 4
    }
    
  }