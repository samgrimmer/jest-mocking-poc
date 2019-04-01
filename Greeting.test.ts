import { Greeting } from './Greeting';

jest.mock('./Greeting.ts');

const mockedGreeting = <jest.Mock<Greeting>>Greeting;

mockedGreeting.mockImplementation(() => {
  return {
    hello: jest.fn(() => 'hello there')
  }
})

describe('Greeting class tests', () => {
  it('mocked class instantiated', () => {
    new Greeting();

    expect(Greeting).toHaveBeenCalledTimes(1);
  });

  it('mocked class method called', () => {
    const greeting = new Greeting().hello();

    expect(greeting).toEqual('hello there');
  });
});
