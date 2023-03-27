import {expect} from "chai";
import {greet} from "../src";

describe('greet', () => {

  it('returns welcome greeting', () => {
    expect(greet('Foo')).to.eql('Hello Foo')
  });
})
