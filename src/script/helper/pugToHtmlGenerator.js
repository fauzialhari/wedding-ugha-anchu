const pug = require('pug');
const fs = require('fs');

function pugToHtml(path) {
    const thePath = path;
    const pugString = fs.readFileSync(thePath, 'utf8');
    const htmlString = pug.render(pugString);

    return htmlString;
}

module.exports = pugToHtml;
