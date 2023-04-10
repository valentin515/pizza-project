export function findVariation(item, value, type){

    const [findType, staticType] = type == "diameter" ? ["diameter", "dough"] : ["dough", "diameter"];

    return item.variations.find(variation => variation[findType] == value && variation[staticType] == item[staticType]);
}