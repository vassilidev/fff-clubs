import fs from 'fs';

fs.readFile('finalClubs-v2.json', 'utf-8', function (err, data) {
    let rows = JSON.parse(data);
    console.log(rows.length)
    // makeUnique(rows);
})

function makeUnique(rows) {
    console.log(rows.length)

    let clubCodes = {};

    for (let i = 0; i < rows.length; i++) {
        clubCodes[rows[i].cl_cod] = rows[i];
    }

    fs.writeFile('finalClubsUnique-' +  (new Date()).toISOString().replace(/[:.]/g, '-')  + '.json', JSON.stringify(Object.values(clubCodes)), 'utf8', (err) => {
        if (err) {
            console.error('An error occurred while writing the file:', err);
        } else {
            console.log('File has been written successfully');
        }
        // Ensure master process exits after writing the final output file
        process.exit(0);
    });
}