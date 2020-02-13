let express    = require('express'),
    app        = express(),
    fs         = require('fs');

for(let i = 0; i < 5; i++){
    let grid = [[0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]];
    function fillDiagonal(){
        for(let mult = 0; mult < 3; mult++){
            let numbers = [1,2,3,4,5,6,7,8,9];
            for(let v = 0; v < 3; v++){
                for(let h = 0; h < 3; h++){
                    let numRandom = Math.floor(Math.random() * (numbers.length - 0)) + 0
                    grid[v+3*mult][h+3*mult] = numbers[numRandom];
                    if (numRandom !== -1) numbers.splice(numRandom, 1);
                }
            }
        }
    };
    function first3Lines(){
        for (let v = 0; v < 3; v++){
            for(let h = 3; h < 9; h++){
                let numbers = [1,2,3,4,5,6,7,8,9];
                //check possible numbers
                //horizontally
                for(let hComp = 0; hComp < 9; hComp++){
                    let index = numbers.indexOf(grid[v][hComp]);
                    if (index !== -1) numbers.splice(index, 1);
                }
                //vertically
                for(let vComp = 0; vComp < 9; vComp++){
                    let index = numbers.indexOf(grid[vComp][h]);
                    if (index !== -1) numbers.splice(index, 1);
                }
                //square
                if(h < 6){
                    for(let hSquare = 3; hSquare < 6; hSquare++){
                        for(let vSquare = 0; vSquare < 3; vSquare++){
                            let index = numbers.indexOf(grid[vSquare][hSquare]);
                            if (index !== -1) numbers.splice(index, 1);
                        }    
                    }
                }else{
                    for(let hSquare = 6; hSquare < 9; hSquare++){
                        for(let vSquare = 0; vSquare < 3; vSquare++){
                            let index = numbers.indexOf(grid[vSquare][hSquare]);
                            if (index !== -1) numbers.splice(index, 1);                    
                        }    
                    }
                }
                let numRandom = Math.floor(Math.random() * (numbers.length - 0)) + 0
                grid[v][h] = numbers[numRandom];
            }
        }
    };
    function second3Lines(){
        for (let hMult = 0; hMult < 3; hMult = hMult + 2){
            for (let v = 3; v < 6; v++){
                for(let h = 0; h < 3; h++){
                    let numbers = [1,2,3,4,5,6,7,8,9];
                    //check possible numbers
                    //horizontally
                    for(let hComp = 0; hComp < 9; hComp++){
                        let index = numbers.indexOf(grid[v][hComp]);
                        if (index !== -1) numbers.splice(index, 1);
                    }
                    //vertically
                    for(let vComp = 0; vComp < 9; vComp++){
                        let index = numbers.indexOf(grid[vComp][h+3*hMult]);
                        if (index !== -1) numbers.splice(index, 1);
                    }
                    //square
                    if((h+3*hMult) < 3){
                        for(let hSquare = 0; hSquare < 3; hSquare++){
                            for(let vSquare = 3; vSquare < 6; vSquare++){
                                let index = numbers.indexOf(grid[vSquare][hSquare]);
                                if (index !== -1) numbers.splice(index, 1);
                            }    
                        }
                    }else{
                        for(let hSquare = 6; hSquare < 9; hSquare++){
                            for(let vSquare = 3; vSquare < 6; vSquare++){
                                let index = numbers.indexOf(grid[vSquare][hSquare]);
                                if (index !== -1) numbers.splice(index, 1);
                            }    
                        }
                    }
                    let numRandom = Math.floor(Math.random() * (numbers.length - 0)) + 0
                    grid[v][h+3*hMult] = numbers[numRandom];
                }
            }
        }
    };
    function last3Lines(){
        for (let v = 6; v < 9; v++){
            for(let h = 0; h < 6; h++){
                let numbers = [1,2,3,4,5,6,7,8,9];
                //check possible numbers
                //horizontally
                for(let hComp = 0; hComp < 9; hComp++){
                    let index = numbers.indexOf(grid[v][hComp]);
                    if (index !== -1) numbers.splice(index, 1);
                }
                //vertically
                for(let vComp = 0; vComp < 9; vComp++){
                    let index = numbers.indexOf(grid[vComp][h]);
                    if (index !== -1) numbers.splice(index, 1);
                }
                //square
                if(h < 3){
                    for(let hSquare = 0; hSquare < 3; hSquare++){
                        for(let vSquare = 6; vSquare < 9; vSquare++){
                            let index = numbers.indexOf(grid[vSquare][hSquare]);
                            if (index !== -1) numbers.splice(index, 1);
                        }    
                    }
                }else{
                    for(let hSquare = 3; hSquare < 6; hSquare++){
                        for(let vSquare = 6; vSquare < 9; vSquare++){
                            let index = numbers.indexOf(grid[vSquare][hSquare]);
                            if (index !== -1) numbers.splice(index, 1);
                        }    
                    }
                }
                let numRandom = Math.floor(Math.random() * (numbers.length - 0)) + 0
                grid[v][h] = numbers[numRandom];
            }
        }
    }
    function cleanGrid(){
        for(let h = 0; h < 9; h++){
            for(let v = 0; v < 9; v++){
                grid[v][h] = 0;
            }    
        }
    }
    function checkGrid(){
        for(let h = 0; h < 9; h++){
            for(let v = 0; v < 9; v++){
                if(grid[v][h] === undefined){
                    cleanGrid();
                    createGrid();
                }
            }    
        }
    }
    function createGrid(){
        fillDiagonal();
        first3Lines();
        second3Lines();
        last3Lines();
        checkGrid();
    }
    createGrid();
    fs.appendFile('sudoku.txt', grid + '\n\n', (err) => {
        if (err) throw err;
        console.log('saved!');
    });
}

app.listen(3000, ()=>{
    console.log('server 3000 listening');
})
