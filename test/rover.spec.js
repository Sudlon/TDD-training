class Rover {
    dirIndex;
    xCoord;
    yCoord;

    constructor(xCoord, yCoord, dirIndex){
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.dirIndex = dirIndex;
    }

    turnRight(){
        this.dirIndex++;
        if (this.dirIndex > 3) {
            this.dirIndex = 0;
        }
    }

    turnLeft() {
        this.dirIndex--;
        if (this.dirIndex < 0) {
          this.dirIndex = 3;
        }
      }
}

describe('mars rover', () => {
    describe("turns right", () => {
        it("should have dirIndex of 1 when it was 0 and turning right", () => {
            const rover = new Rover(1, 2, 0);
            rover.turnRight();
            expect(rover.dirIndex).toBe(1);
        });
    
        it("should have dirIndex of 2 when it was 1 and turning right", () => {
            const rover = new Rover(1, 2, 1);
            rover.turnRight();
            expect(rover.dirIndex).toBe(2);
        });

        it("should have dirIndex of 3 when it was 2 and turning right", () => {
            const rover = new Rover(1, 2, 2);
            rover.turnRight();
            expect(rover.dirIndex).toBe(3);
        });

        it("should have dirIndex of 4 when it was 3 and turning right", () => {
            const rover = new Rover(1, 2, 3);
            rover.turnRight();
            expect(rover.dirIndex).toBe(0);
        });
    });

    describe("turns left", () => {
        it("should have dirIndex of 3 when it was 0 and turning right", () => {
          const rover = new Rover(1, 2, 0);
          rover.turnLeft();
          expect(rover.dirIndex).toBe(3);
        });

        it("should have dirIndex of 2 when it was 3 and turning right", () => {
            const rover = new Rover(1, 2, 3);
            rover.turnLeft();
            expect(rover.dirIndex).toBe(2);
        });

        it("should have dirIndex of 1 when it was 2 and turning right", () => {
            const rover = new Rover(1, 2, 2);
            rover.turnLeft();
            expect(rover.dirIndex).toBe(1);
        });
        
        it("should have dirIndex of 0 when it was 1 and turning right", () => {
            const rover = new Rover(1, 2, 1);
            rover.turnLeft();
            expect(rover.dirIndex).toBe(0);
        });
    });
})


/*
Test cases

Direction = [North, East, South, West]

1. turn right > directionIndex + 1
    a. N > E
    b. E > S
    c. S > W
    d. W > N
2. turn left > directionIndex - 1
3. move forward > switch case > index=0 then yCoord + 1, etc....
4. move backward > switch case > index=0 then yCoord - 1, etc....

*/