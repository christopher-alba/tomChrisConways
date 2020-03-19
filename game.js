module.exports = {
  makeField,
  findLiveNeighbours,
  findCoordinates,
  addOne,
  subOne,
  getNeighboursIndex
}

function makeField (size) {
  let field = []
  for (let i = 0; i < size * size; i++) {
    let rand = Math.random()
    if (rand > 0.6) {
      field.push(1)
    } else {
      field.push(0)
    }
  }
  return field
}

function findLiveNeighbours (field, cell) {
  let live = 0
  let size = Math.sqrt(field.length)
  let cellCoords = findCoordinates(size, cell)
  let row = cellCoords[0]
  let col = cellCoords[1]
  let neighboursIndex = getNeighboursIndex(size, row, col)
  console.log(neighboursIndex)

  // check if cell equates to 1
  for (let i = 0; i < neighboursIndex.length; i++) {
    if (field[neighboursIndex[i]] === 1) {
      live++
    }
  }

  return live
}

function findCoordinates (size, cell) {
  const col = cell % size
  const row = (cell - col) / size
  return [row, col]
}
function addOne (index, maxLength) {
  if (index === maxLength - 1) {
    return 0
  } else {
    return index + 1
  }
}

function subOne (index, maxLength) {
  if (index === 0) {
    return maxLength - 1
  } else {
    return index - 1
  }
}

function getNeighboursIndex (size, row, col) {
  let indexes = []
  indexes.push(subOne(row, size) * size + subOne(col, size))

  indexes.push(subOne(row, size) * size + col)

  indexes.push(subOne(row, size) * size + addOne(col, size))

  indexes.push(row * size + subOne(col, size))

  indexes.push(row * size + addOne(col, size))

  indexes.push(addOne(row, size) * size + subOne(col, size))

  indexes.push(addOne(row, size) * size + col)

  indexes.push(addOne(row, size) * size + addOne(col, size))

  return indexes
}
