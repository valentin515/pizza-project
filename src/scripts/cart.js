export function wordEnd(count){
    const arrNums = count.toString().split("");
    const lastNum = arrNums[arrNums.length - 1];
    let result = "";
    if(count == 11 || lastNum > 4 || lastNum == 0){
        result = "товаров"
    } else if(lastNum == 1){
        result = "товар"
    } else {
        result = "товарa"
    }
    return result;
  }