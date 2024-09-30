function solution(array) {
    array.sort((a, b) => b - a);
    return array[(array.length-1)/2];
}