function solution(answers) {
    let mathIdiot = [0, 0, 0];
    let result = [];

    // Patterns for each enthusiast
    const firstPattern = [1, 2, 3, 4, 5];
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    answers.forEach((answer, index) => {
        // First enthusiast's answer check
        if (answer === firstPattern[index % firstPattern.length]) {
            mathIdiot[0]++;
        }

        // Second enthusiast's answer check
        if (answer === secondPattern[index % secondPattern.length]) {
            mathIdiot[1]++;
        }

        // Third enthusiast's answer check
        if (answer === thirdPattern[index % thirdPattern.length]) {
            mathIdiot[2]++;
        }
    });

    // Find the maximum score
    const max = Math.max(...mathIdiot);

    // Find all enthusiasts with the maximum score
    mathIdiot.forEach((score, index) => {
        if (score === max) {
            result.push(index + 1);
        }
    });

    return result;
}
