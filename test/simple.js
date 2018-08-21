const {should,expect,assert} = require('chai');

const {add,mul,cover} = require('../src/math');


// should();
// add(2,3).should.equal(5);

// expect(add(2,3)).to.equal(5);

// assert(add(2,3),5);

describe('#math',()=>{
    describe('add',()=>{
        it('shoule return 5 when 2 + 3',()=>{
            assert.equal(add(2,3),5);
        })
    })
    describe('mul',()=>{
        it('shoule return 6 when 2 * 3',()=>{
            assert.equal(mul(2,3),6);
        })
    })
    describe('cover',()=>{
        it('shoule return 1 when cover(2,1)',()=>{
            assert.equal(cover(2,1),1);
        })
        it('shoule return 1111 when cover(2,4)',()=>{
            assert.equal(cover(2,2),3);
        })
        it('shoule return 1 when cover(2,2)',()=>{
            assert.equal(cover(2,3),1);
        })
    })
})

//mocha window下无法找到_mocha命令 所以需要加直接路径