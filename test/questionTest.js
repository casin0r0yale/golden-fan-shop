var expect = require('chai').expect;
var shallow = require('enzyme');
var sinon = require('sinon');

var Questions = require('../client/src/components/Questions.jsx');

describe('Questions & Answers Test', () => {
  it('Question component should exist', () => {
    const wrapper = shallow(<Questions />);
    expect(wrapper.find(Questions)).to.exist;
  })
})