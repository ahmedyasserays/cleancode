const STATUS_INDEX = 0;
const SELECTED_STATUS = 4;

function getSelectedCells(roomRack) {
    let selectedCells = [];
    for (let cell of roomRack) {
        if (cell.isSelected()) {
            selectedCells.push(cell);
        }
    }
    return selectedCells;
}

function isSelected(cell) {
    return cell[STATUS_INDEX] === SELECTED_STATUS;
}
