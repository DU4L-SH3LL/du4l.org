var Table = require('cli-table')

function drawTable() {
    var table = new Table({
        head: ['CTF', 'Page', 'Score', 'Date'],
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
            , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
            , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
            , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
    })

    table.push(['Balsn', "<a href='https://balsnctf.com'>link</a>", '50', '20. Dec 2021'])

    var target = document.getElementById('table')
    target.innerHTML = table.toString()
}

drawTable();