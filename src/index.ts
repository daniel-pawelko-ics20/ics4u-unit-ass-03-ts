/**
 * This program uses the Triangle Class
 *
 * By:      Daniel Pawelko
 * Version: 1.0
 * Since:   2022-10-23
 */

// Imports
import Triangle from './Triangle'
import promptSync from 'prompt-sync'

// Defining variables
const prompt = promptSync()

try {
  // User input
  const lengthOneString = prompt('Length 1: ')
  const lengthTwoString = prompt('Length 2: ')
  const lengthThreeString = prompt('Length 3: ')
  const length1 = parseFloat(lengthOneString)
  const length2 = parseFloat(lengthTwoString)
  const length3 = parseFloat(lengthThreeString)

  if (
    isNaN(length1) ||
    isNaN(length2) ||
    isNaN(length3) ||
    length1 <= 0 ||
    length2 <= 0 ||
    length3 <= 0
  ) {
    console.log('Input invalid :(')
  } else {
    // Using Object
    const myTriangle = new Triangle(length1, length2, length3)

    // Print out Triangle info
    console.log(
      `Created a ${length1} mm by ${length2} mm by ${length3} mm triangle.`
    )
    console.log(' → Is the triangle valid: ' + myTriangle.isValid().toString())
    console.log(
      ' → Semiperimeter: ' + myTriangle.semiPerimeter().toFixed(4) + ' mm'
    )
    console.log(' → Area: ' + myTriangle.area().toFixed(4) + ' mm²')
    console.log(' → Type: ' + myTriangle.getType())
    console.log(' → Angle 1: ' + myTriangle.angle(1).toFixed(4) + ' rad')
    console.log(' → Angle 2: ' + myTriangle.angle(2).toFixed(4) + ' rad')
    console.log(' → Angle 3: ' + myTriangle.angle(3).toFixed(4) + ' rad')
    console.log(' → Height 1: ' + myTriangle.height(1).toFixed(4) + ' mm')
    console.log(' → Height 2: ' + myTriangle.height(2).toFixed(4) + ' mm')
    console.log(' → Height 3: ' + myTriangle.height(3).toFixed(4) + ' mm')
    console.log(
      ' → Inner circle radius: ' +
        myTriangle.innerCircleRadius().toFixed(4) +
        ' mm'
    )
    console.log(
      ' → Circumcircle radius: ' +
        myTriangle.circumsicleRadius().toFixed(4) +
        ' mm'
    )
    console.log('')
  }
} catch (e) {
  // Incase error occurs
  console.log('Input invalid :(')
}

// Done
console.log('\nDone.')
