function Item(name ,sellIn , quality) {
    return {
        "name": name,
        "sellIn": sellIn,
        "quality": quality,
        "print": function print() {
            return name + ", " + sellIn + ", " + quality;
        }
    }
};


module.exports = Item;