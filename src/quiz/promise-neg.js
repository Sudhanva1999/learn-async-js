function logRowsWithNegativeNumbers(arr) {
    return new Promise((resolve, reject) => {
        console.log('Log called ... ');
        if(Array.isArray(arr)) {
            const promises = arr.map(row => {
                return new Promise((resolveRow, rejectRow) => {
                    setTimeout(() => {
                        if (row.some(num => num < 0)) {
                            console.log('Row with negative numbers:', row);
                            resolveRow(); // Resolve if there are negative numbers
                        } else {
                            rejectRow(); // Reject if there are no negative numbers
                        }
                    }, 0);
                });
            });

            Promise.any(promises)
                .then(() => {
                    console.log('At least one row with negative numbers');
                    resolve();
                })
                .catch(() => {
                    console.log('No rows with negative numbers');
                    resolve(); // Resolve even if all rows are processed
                });
        }
        else {
            console.log('Rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('Returning from log');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegativeNumbers(array2D)
    .then(() => console.log('Done'))
    .catch(error => console.error(error));
