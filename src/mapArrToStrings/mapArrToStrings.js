const mapArrToStrings = (arr) => {
    return arr
        .filter((item) => Number.isInteger(item))
        .map((item) => String(item));
}

module.exports = mapArrToStrings;
