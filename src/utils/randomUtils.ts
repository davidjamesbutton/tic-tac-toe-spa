const randomChoice = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

export default randomChoice;
