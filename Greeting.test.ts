import { Greeting } from './Greeting';

jest.mock('./Greeting.ts');

const mockedGreeting = <jest.Mock<Greeting>>Greeting;

mockedGreeting.mockImplementation(
  (): any => {
    return {
      hello: jest.fn(() => 'hello there'),
    };
  }
);

describe('Greeting tests', () => {
  it('mocked class instatiated', () => {
    new Greeting();

    expect(Greeting).toHaveBeenCalledTimes(1);
  });

  it('mocked class method called', () => {
    const greeting = new Greeting().hello();

    //expect(Greeting.prototype.hello).toHaveBeenCalledTimes(1);
    expect(greeting).toEqual('hello there');
  });
});
