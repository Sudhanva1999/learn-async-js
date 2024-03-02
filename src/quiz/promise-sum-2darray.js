function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            const promises = arr.map(row => {
                return new Promise((resolveRow, rejectRow) => {
                    setTimeout(() => {
                        const rowSum = row.reduce((acc, val) => acc + val, 0);
                        console.log('Resolving row sum ... ');
                        resolveRow(rowSum);
                    }, 0);
                });
            });

            Promise.all(promises)
                .then(rowSums => {
                    const totalSum = rowSums.reduce((acc, val) => acc + val, 0);
                    console.log('Resolving total sum ... ');
                    resolve(totalSum);
                })
                .catch(error => {
                    console.log('Rejecting ... ');
                    reject(error);
                });
        }
        else {
            console.log('Rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('Returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumPromise1 = sum2DArray(array2D);

sumPromise1
.then((res) => console.log(res))
.catch((error) => console.error(error));

const sumPromise2 = sum2DArray("array2D");

sumPromise2
.then((res) => console.log(res))
.catch((error) => console.error(error));
