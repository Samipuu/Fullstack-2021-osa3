(this.webpackJsonppuhelinluettelo = this.webpackJsonppuhelinluettelo || []).push([[0], {
  38(e, n, t) {
    t.r(n); const r = t(14); const o = t.n(r); const i = t(3); const u = t(2); const c = t(4); const a = t.n(c); const l = '/api/persons'; const s = function () { return a.a.get(l).then(((e) => e.data)); }; const d = function (e) { return a.a.post(l, e).then(((e) => e.data)); }; const b = function (e, n) { return a.a.put(`${l}/${e}`, n).then(((e) => e.data)); }; const f = function (e) { return a.a.delete(`${l}/${e}`).then(((e) => e.data)); }; const j = t(0); const h = function (e) { const n = e.filter; const t = e.handleFilter; return Object(j.jsxs)('p', { children: ['Filter: ', Object(j.jsx)('input', { value: n, onChange: t })] }); }; const m = function (e) { return Object(j.jsxs)('form', { onSubmit: e.addPerson, children: [Object(j.jsx)('h2', { children: 'Add new person' }), Object(j.jsxs)('div', { children: ['Name: ', Object(j.jsx)('input', { value: e.newName, onChange: e.handleNameChange }), Object(j.jsx)('br', {}), 'Number: ', Object(j.jsx)('input', { value: e.newNumber, onChange: e.handleNumberChange })] }), Object(j.jsx)('div', { children: Object(j.jsx)('button', { type: 'submit', children: 'add' }) })] }); }; const v = function (e) { const n = e.persons; const t = e.filter; const r = e.removePerson; return Object(j.jsx)('div', { children: n.map(((e) => (typeof e.name === 'undefined' ? null : e.name.toLowerCase().includes(t.toLowerCase()) ? g({ person: e, removePerson: r }) : null))) }); }; const O = function (e) {
      const n = e.notification; return n === null ? null : Object(j.jsx)('div', {
        className: 'notification',
        style: {
          color: 'green', fontSize: 20, borderWidth: 2, borderColor: 'green', borderStyle: 'solid', display: 'inline', backgroundColor: 'rgb(190,190,190)', padding: 5,
        },
        children: n,
      });
    }; const p = function (e) {
      const n = e.errorMessage; return n === null ? null : Object(j.jsx)('div', {
        className: 'error',
        style: {
          color: 'red', fontSize: 20, borderWidth: 2, borderColor: 'red', borderStyle: 'solid', display: 'inline', backgroundColor: 'rgb(190,190,190)', padding: 5,
        },
        children: n,
      });
    }; var g = function (e) { const n = e.person; const t = e.removePerson; return Object(j.jsxs)('p', { children: [n.name, ' ', n.number, ' ', Object(j.jsx)(x, { removePerson: t, id: n.id })] }, n.id); }; var x = function (e) {
      const n = e.id; const t = e.removePerson; return Object(j.jsx)('button', {
        type: 'button', id: n, onClick: t, children: 'Delete',
      });
    }; const w = function () {
      const e = Object(u.useState)([]); const n = Object(i.a)(e, 2); const t = n[0]; const r = n[1]; Object(u.useEffect)((() => { s().then(((e) => { r(e); })); }), []); const o = Object(u.useState)(''); const c = Object(i.a)(o, 2); const a = c[0]; const l = c[1]; const g = Object(u.useState)(''); const x = Object(i.a)(g, 2); const w = x[0]; const y = x[1]; const C = Object(u.useState)(''); const N = Object(i.a)(C, 2); const S = N[0]; const P = N[1]; const k = Object(u.useState)(null); const T = Object(i.a)(k, 2); const D = T[0]; const F = T[1]; const z = Object(u.useState)(null); const A = Object(i.a)(z, 2); const E = A[0]; const J = A[1]; return Object(j.jsxs)('div', {
        children: [Object(j.jsx)('h1', { children: 'Phonebook' }), Object(j.jsx)(h, { filter: S, handleFilter(e) { P(e.target.value); } }), Object(j.jsx)(p, { errorMessage: E }), Object(j.jsx)(O, { notification: D }), Object(j.jsx)(m, {
          addPerson(e) { e.preventDefault(); const n = { name: a, number: w }; if (t.some(((e) => e.name === a))) { const o = t.find(((e) => e.name === a)); window.confirm(''.concat(a, ' is aleady added to phonebook. Do you want to replace the number ').concat(o.number, ' with ').concat(w, '?')) && b(o.id, n).then(((e) => { r(t.map(((n) => (n.id !== o.id ? n : e)))), F(`Number for ${o.name} have been changed to ${w}.`), setTimeout((() => { F(null); }), 2e3); })).catch(((e) => { J(`${o.name} is already removed from the server`), r(t.filter(((e) => e.id !== o.id))), setTimeout((() => { F(null); }), 5e3); })); } else d(n).then(((e) => { r(t.concat(e)), F(`${a} have been added to the Phonebook`), setTimeout((() => { F(null); }), 2e3); })).catch(((e) => { J(e.response.data.error), console.log(e.response.data), setTimeout((() => { J(null); }), 5e3); })); l(''), y(''); }, newName: a, handleNameChange(e) { l(e.target.value); }, newNumber: w, handleNumberChange(e) { y(e.target.value); },
        }), Object(j.jsx)('h2', { children: 'Numbers' }), Object(j.jsx)(v, { persons: t, removePerson(e) { const n = String(e.target.id); const o = t.find(((e) => e.id === n)); window.confirm(`Are you sure you want to remove ${o.name}`) && f(n).then(((e) => { r(t.map(((t) => (t.id !== n ? t : e)))), F(`${o.name} have been removed`), setTimeout((() => { F(null); }), 2e3); })).catch(((e) => { J(`${o.name} is already removed from the server`), r(t.filter(((e) => e.id !== o.id))), setTimeout((() => { F(null); }), 5e3); })); }, filter: S })],
      });
    }; o.a.render(Object(j.jsx)(w, {}), document.getElementById('root'));
  },
}, [[38, 1, 2]]]);
// # sourceMappingURL=main.a8ba98dd.chunk.js.map
