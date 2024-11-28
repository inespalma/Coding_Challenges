function notBothTrue(a, b) {
    // Returns true if NOT both are true
    return !(a && b); 
  }
  
  console.log(notBothTrue(true, true)); // false (both are true)
  console.log(notBothTrue(true, false)); // true (not both are true)
  console.log(notBothTrue(false, true)); // true (not both are true)
  console.log(notBothTrue(false, false)); // true (not both are true)