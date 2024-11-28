// function TrueIfArgumentTrue(a, b) {
//   if (a === true || b === true) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// function oneOrOther(a, b) {
//   if (a && !b) {
//     return true;
//   } else if (!a && b) {
//     return true;
//   } else if (!a && !b) {
//     return false;
//   } else if (a && b) {
//     return false;
//   }
// }

// function oneOrOthers(a, b) {
//   if (a !== b) {
//     return true;
//   }
//   return false;
// }

function oneOrOthersFinal(a, b) {
  return a != b;
}

TrueIfArgumentTrue(true, true); //true
TrueIfArgumentTrue(false, true); //true
TrueIfArgumentTrue(true, false); //true
TrueIfArgumentTrue(false, false); //false

oneOrOther(true, true); //false
oneOrOther(false, true); //true
oneOrOther(true, false); //true
oneOrOther(false, false); //false

oneOrOthers(true, true); //false
oneOrOthers(false, true); //true
oneOrOthers(true, false); //true
oneOrOthers(false, false); //false

oneOrOthersFinal(true, true); //false
oneOrOthersFinal(false, true); //true
oneOrOthersFinal(true, false); //true
oneOrOthersFinal(false, false); //false