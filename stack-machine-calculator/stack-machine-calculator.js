var stackMachineCalculator = function (instructions) {
    var usefulInstructions = instructions.split(" ");
    var stack = [];
    for (var _i = 0, usefulInstructions_1 = usefulInstructions; _i < usefulInstructions_1.length; _i++) {
        var inst = usefulInstructions_1[_i];
        switch (inst) {
            case "+":
                stack.push(String(Number(stack.pop()) + Number(stack.pop())));
                break;
            case "-":
                stack.push(String(Number(stack.pop()) - Number(stack.pop())));
                break;
            case "POP":
                stack.pop();
                break;
            case "DUP":
                var temp = stack.pop();
                stack.push(temp);
                stack.push(temp);
                break;
            default:
                stack.push(inst);
                break;
        }
    }
    return Number(stack.pop());
};
module.exports = stackMachineCalculator;
