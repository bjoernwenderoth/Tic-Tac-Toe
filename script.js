let fields = [
    null,
    'circle',
    null,
    null,
    'cross',
    null,
    null,
    null,
    null,
]

function init(){
render();
}

function render() {
    let html = '<table>';

    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            html += '<td>';
            if (fields[index] === 'cross') {
                html += generateCrossSVG();
            } else if (fields[index] === 'circle') {
                html += generateCircleSVG();
            }
            html += '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';

    document.getElementById('container').innerHTML = html;
}


function generateCircleSVG() {
    const color = '#00B0EF';
    const width = 70;
    const height = 70;

    return `<svg width="${width}" height="${height}">
              <circle cx="35" cy="35" r="30" stroke="${color}" stroke-width="5" fill="none">
                <animate attributeName="stroke-dasharray" from="0 188.5" to="188.5 0" dur="0.4s" fill="freeze" />
              </circle>
            </svg>`;
}


function generateCrossSVG() {
    const color = '#FFC000';
    const width = 70;
    const height = 70;

    const svgHtml = `
      <svg width="${width}" height="${height}">
        <line x1="0" y1="0" x2="${width}" y2="${height}"
          stroke="${color}" stroke-width="5">
          <animate attributeName="x2" values="0; ${width}" dur="400ms" />
          <animate attributeName="y2" values="0; ${height}" dur="400ms" />
        </line>
        <line x1="${width}" y1="0" x2="0" y2="${height}"
          stroke="${color}" stroke-width="5">
          <animate attributeName="x2" values="${width}; 0" dur="400ms" />
          <animate attributeName="y2" values="0; ${height}" dur="400ms" />
        </line>
      </svg>
    `;

    return svgHtml;
}

