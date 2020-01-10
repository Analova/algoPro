// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//     Example

// For

// picture = ["abc",
//     "ded"]
// the output should be

// addBorder(picture) = ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]

function addBorder(picture) {
  //   const lengthOfWall = picture[0].length + 2;
  //   let wall = "";

  //   for (let i = 0; i < lengthOfWall; i++) {
  //     wall = wall.concat("*");
  //   }

  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return piccture;
}
