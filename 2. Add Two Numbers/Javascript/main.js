var addTwoNumbers = function(l1, l2) {
    let n1 = "";
    for (let i = l1.length -1; i >= 0; i--) {
        n1 += l1[i].toString();
    }

    let n2 = "";
    for (let i = l2.length - 1; i >= 0; i--) {
        n2 += l2[i].toString();
    }

    console.log(n1);
    console.log(n2);

    let n3 = (parseInt(n1) + parseInt(n2)).toString();
    let output = {
        head: {
            
        }
    };

    for (let i = n3.length -1; i >= 0; i--) {
        output.push(parseInt(n3[i]));
    }

    return output;
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));