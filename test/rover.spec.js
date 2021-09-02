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
    describe("turns right", () => {
        it("should have dir = 'E' when it was 'N' and turning right", () => {
            const rover = new Rover(1, 2, 'N');
            rover.turnRight();
            expect(rover.dir).toBe('E');
        });
    
        it("should have dir = 'S' when it was 'E' and turning right", () => {
            const rover = new Rover(1, 2, 'E');
            rover.turnRight();
            expect(rover.dir).toBe('S');
        });

        it("should have dir = 'W' when it was 'S' and turning right", () => {
            const rover = new Rover(1, 2, 'S');
            rover.turnRight();
            expect(rover.dir).toBe('W');
        });

        it("should have dir = 'N' when it was 'W' and turning right", () => {
            const rover = new Rover(1, 2, 'W');
            rover.turnRight();
            expect(rover.dir).toBe('N');
        });
    });

    describe("turns left", () => {
        // check out: parameterized tests
        it("should have dir = 'W' when it was 'N' and turning left", () => {
            const rover = new Rover(1, 2, 'N');
            rover.turnLeft();
            expect(rover.dir).toBe('W');
        });

        it("should have dir = 'S' when it was 'W' and turning left", () => {
            const rover = new Rover(1, 2, 'W');
            rover.turnLeft();
            expect(rover.dir).toBe('S');
        });

        it("should have dir = 'E' when it was 'S' and turning left", () => {
            const rover = new Rover(1, 2, 'S');
            rover.turnLeft();
            expect(rover.dir).toBe('E');
        });
        
        it("should have dir = 'N' when it was 'E' and turning left", () => {
            const rover = new Rover(1, 2, 'E');
            rover.turnLeft();
            expect(rover.dir).toBe('N');
        });
    });

    describe('move', () => {
        it('should increase yCoord by 1 when moving forward and facing dir = "N"', () => {
            const rover = new Rover(0, 0, 'N');
            rover.moveForward();
            expect(rover.coords).toStrictEqual({x:0, y:1});
        })

        it('should increase xCoord by 1 when moving forward and facing dir = "E"', () => {
            const rover = new Rover(0, 0, 'E');
            rover.moveForward();
            expect(rover.coords).toStrictEqual({x:1, y:0});
        })

        it('should decrease yCoord by 1 when moving forward and facing dir = "S"', () => {
            const rover = new Rover(0, 0, 'S');
            rover.moveForward();
            expect(rover.coords).toStrictEqual({x:0, y:-1});
        })

        it('should decrease xCoord by 1 when moving forward and facing dir = "W"', () => {
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