const stackMachineCalculator =  (instructions: string) :number =>{
    const usefulInstructions: string[] = instructions.split(" ");
    const stack: Array<string>= [];
    for(let inst of usefulInstructions){
        switch (inst) {
            case "+":
                stack.push(String(Number(stack.pop()) + Number(stack.pop())))
                break;
            case "-":
                stack.push(String(Number(stack.pop()) -Number(stack.pop())))
                break;
            case "POP":
                stack.pop()
                break;
            case "DUP":
                const temp:string = stack.pop()!
                stack.push(temp)
                stack.push(temp)
                break;
            default:
                stack.push(inst)
                break;
        }
    }   
    return Number(stack.pop());
};

module.exports = stackMachineCalculator;
