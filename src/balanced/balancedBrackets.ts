function isValidBracketSequence(s: string): boolean {
    const stack: string[] = [];
    const bracketMap: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of s) {
        if (bracketMap[char]) {
            stack.push(bracketMap[char]);
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValidBracketSequence("(){}[]"));    // true
console.log(isValidBracketSequence("[{()}](){}")); // true
console.log(isValidBracketSequence("[]{()}"));     // false
console.log(isValidBracketSequence("[{)]"));       // false

export default isValidBracketSequence;
