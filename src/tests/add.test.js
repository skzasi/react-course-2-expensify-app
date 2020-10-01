const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!!`;
test('should add two numbers', () => {
    const result = add(1, 4);

    // if (result !== 5) {
    //     throw new Error(`Not a proper addition, the result is ${result}. Expected value 5`);
    // }

    expect(result).toBe(5);
});

test('should generate greeting by name', () => {
    const greeting = generateGreeting('Zaid');

    expect(greeting).toBe('Hello Zaid!!');
});

test('should generate greeting with no name', () => {

    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!!');
});