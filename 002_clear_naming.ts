const STATUS_INDEX = 0;
const SELECTED_STATUS = 4;

function getSelectedCells(roomRack) {
    let selectedCells = [];
    for (let cell of roomRack) {
        if (cell[STATUS_INDEX] === SELECTED_STATUS) {
            selectedCells.push(cell);
        }
    }
    return selectedCells;
}
