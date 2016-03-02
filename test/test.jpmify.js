import 'babel-polyfill'

import { expect } from 'chai'

import jpmify from '..'

describe('jpmify', () => {
    describe('transform', () => {
        it('should map a word to another word', () => {
            expect(jpmify('gentille')).to.equal('bonne')
        })
    })
})
