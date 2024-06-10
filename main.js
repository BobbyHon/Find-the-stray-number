function stray(numbers) {
    const allNums = Array.from(new Set(numbers))
    const firstIndex = numbers.indexOf(allNums[0])
    
    if (numbers.includes(allNums[0], firstIndex + 1)) return allNums[1]
  
    return allNums[0]
  }