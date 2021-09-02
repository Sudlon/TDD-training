class Rover {
    xCoord;
    yCoord;
    dir;
    coords

    constructor(xCoord, yCoord, dir){
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.dir = dir
        this.coords = {x: xCoord, y: yCoord}
    }

    turnRight(){
        const rightTurns = {
            'N': 'E',
            'E': 'S',
            'S': 'W',
            'W': 'N'
        }
        this.dir = rightTurns[this.dir]
    }

    turnLeft() {
        const leftTurns = {
            'N': 'W',
            'W': 'S',
            'S': 'E',
            'E': 'N'
        }
        this.dir = leftTurns[this.dir]
    }

    moveForward(){
        const forwardMoves = {
            'N' : function(x, y) {return {x: x, y: y + 1}},
            'E' : function(x, y) {return {x: x+1, y: y}},
            'S' : function(x, y) {return {x: x, y: y - 1}},
            'W' : function(x, y) {return {x: x - 1, y: y}}
        }
        this.coords = forwardMoves[this.dir](this.xCoord, this.yCoord);
    }
}

describe('mars rover', () => {
    xdescribe("turns right", () => {
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
        
        // check out: parameterized tests
        it("should have dirIndex of 3 when it was 0 and turning right", () => {
            const rover = new Rover(1, 2, 'N');
            rover.turnLeft();
            expect(rover.dir).toBe('W');
        });

        it("should have dirIndex of 2 when it was 3 and turning right", () => {
            const rover = new Rover(1, 2, 'W');
            rover.turnLeft();
            expect(rover.dir).toBe('S');
        });

        it("should have dirIndex of 1 when it was 2 and turning right", () => {
            const rover = new Rover(1, 2, 'S');
            rover.turnLeft();
            expect(rover.dir).toBe('E');
        });
        
        it("should have dirIndex of 0 when it was 1 and turning right", () => {
            const rover = new Rover(1, 2, 'E');
            rover.turnLeft();
            expect(rover.dir).toBe('N');
        });
    });

    describe('move', () => {
        it('should increase yCoord by 1 when moving forward and facing dirIndex = 0', () => {
            const rover = new Rover(0, 0, 'N');
            rover.moveForward();
            expect(rover.coords).toStrictEqual({x:0, y:1});
        })

        it('should increase xCoord by 1 when moving forward and facing dirIndex = 1', () => {
            const rover = new Rover(0, 0, 'E');
            rover.moveForward();
            expect(rover.coords).toStrictEqual({x:1, y:0});
        })

        it('should decrease yCoord by 1 when moving forward and facing dirIndex = 2', () => {
            const rover = new Rover(0, 0, 'S');
            rover.moveForward();
            expect(rover.coords).toStrictEqual({x:0, y:-1});
        })

        it('should decrease xCoord by 1 when moving forward and facing dirIndex = 3', () => {
            const rover = new Rover(0, 0, 'W');
            rover.moveForward();
            expect(rover.coords).toStrictEqual({x:-1, y:0});
        })
    })
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