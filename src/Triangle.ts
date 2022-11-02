/**
 * Triangle Class
 *
 *
 * By: Daniel Pawelko
 * Version: 1.0
 * Since:   2022-11-1
 */

class Triangle {
  private readonly s1: number
  private readonly s2: number
  private readonly s3: number

  // Constructor
  constructor(s1: number, s2: number, s3: number) {
    this.s1 = s1
    this.s2 = s2
    this.s3 = s3
  }

  // Getter for side one
  public getFirstSide(): number {
    return this.s1
  }

  // Getter for side two
  public getSecondSide(): number {
    return this.s2
  }

  // Getter for side three
  public getThirdSide(): number {
    return this.s3
  }

  // Return perimeter of triangle, or -1 if not valid
  private perimeter(): number {
    if (this.isValid()) {
      return this.s1 + this.s2 + this.s3
    } else {
      return -1
    }
  }

  // Check if triangle is possible/valid
  public isValid(): boolean {
    if (
      this.s1 + this.s2 > this.s3 ||
      this.s1 + this.s3 > this.s2 ||
      this.s2 + this.s3 > this.s1
    ) {
      return true
    } else {
      return false
    }
  }

  // Semiperimeter
  public semiPerimeter(): number {
    if (this.isValid()) {
      return this.perimeter() / 2
    } else {
      return -1
    }
  }

  // Area
  public area(): number {
    if (this.isValid()) {
      const semiPeri = this.semiPerimeter()
      return Math.sqrt(
        semiPeri *
          (semiPeri - this.s1) *
          (semiPeri - this.s2) *
          (semiPeri - this.s3)
      )
    } else {
      return -1
    }
  }

  // Get angles on triangle
  public angle(angleNumber: number): number {
    if (this.isValid() && angleNumber > 0 && angleNumber < 4) {
      const angles = [
        Math.acos(
          (Math.pow(this.s1, 2) + Math.pow(this.s2, 2) - Math.pow(this.s3, 2)) /
            (this.s1 * this.s2 * 2)
        ),
        Math.acos(
          (Math.pow(this.s2, 2) + Math.pow(this.s3, 2) - Math.pow(this.s1, 2)) /
            (this.s3 * this.s2 * 2)
        ),
        Math.acos(
          (Math.pow(this.s2, 2) + Math.pow(this.s3, 2) - Math.pow(this.s1, 2)) /
            (this.s3 * this.s2 * 2)
        )
      ]

      return angles[angleNumber - 1]
    } else {
      return -1
    }
  }

  // Get type of triangle
  public getType(): string {
    if (this.isValid()) {
      const angles = [this.angle(1), this.angle(2), this.angle(3)]

      if (this.s1 === this.s2 && this.s2 === this.s3) {
        return 'Equilateral'
      } else if (
        this.s1 === this.s2 ||
        this.s1 === this.s3 ||
        this.s2 === this.s3
      ) {
        return 'Isosceles'
      } else {
        for (let angle = 0; angle < 3; angle++) {
          if (angles[angle] * (180 / Math.PI) === 90) {
            return 'Right Angle'
          }
        }
        return 'Scalene'
      }
    } else {
      return '-1'
    }
  }

  public height(sideNumber: number): number {
    if (this.isValid() && sideNumber > 0 && sideNumber < 4) {
      const area = this.area()
      const heights = [
        (2 * area) / this.s1,
        (2 * area) / this.s2,
        (2 * area) / this.s3
      ]

      return heights[sideNumber - 1]
    } else {
      return -1
    }
  }

  public innerCircleRadius(): number {
    return this.area() / this.semiPerimeter()
  }

  public circumsicleRadius(): number {
    return (this.s1 * this.s2 * this.s3) / (4 * this.area())
  }
}

export = Triangle
