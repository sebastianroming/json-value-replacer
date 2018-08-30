'use strict';
/* eslint-disable array-callback-return, guard-for-in */

import test from 'ava';
import m from '.';

const object = {a: 'value a', b: 'value b', c: {d: 'value c', e: {f: 'value f'}}};
const replaceValue = '#';
const replacedObject = m(object, replaceValue);
const replacedObjectSameLength = m.sameLength(object, replaceValue);

test('replaced value on first level', t => {
  t.is(replacedObject.a, '#');
});

test('replaced value on third level', t => {
  t.is(replacedObject.c.e.f, '#');
});

test('does the result equal', t => {
  t.deepEqual(replacedObject, {a: '#', b: '#', c: {d: '#', e: {f: '#'}}});
});

test('replaced value has the same length', t => {
  t.is(replacedObjectSameLength.a.length, object.a.length);
});

test('does the same length result equal', t => {
  t.deepEqual(replacedObjectSameLength, {a: '#######', b: '#######', c: {d: '#######', e: {f: '#######'}}});
});
