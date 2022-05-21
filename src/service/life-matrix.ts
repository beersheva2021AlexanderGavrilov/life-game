

export default class LifeMatrix {
    constructor(private _matrix: number[][]) {
    }

    nextStep():number[][] {
        const resMatrix = new Array<number[]>();
        const neighbors = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1, 0], [1, 1]];
        this._matrix.map( (r,i) => {
            resMatrix[i] = [];
            r.map((value, j) => {
                let lives = neighbors.reduce((acc, current) => {
                    try {
                        return this._matrix[i + current[0]][j + current[1]] + acc;
                    } catch {
                        return acc;
                    }
                }, 0);
                let res = 0;
                if(lives === 3 || (this._matrix[i][j] === 1 && lives === 2) ) {
                    res = 1;
                }
                resMatrix[i][j] = res;
            });
        });
        this._matrix = resMatrix;
        return this._matrix;
    }

    get matrix() {
        return this._matrix;
    }
}