const saveOne = jest.fn();

test("Two Arguments", () => {
    saveOne("alice", 20);

    expect(saveOne.mock.calls[0][0]).toBe('alice')
    expect(saveOne.mock.calls[0][1]).toBe(20)
})


//TWO AGUMENTS WITH TWO CALLS

const savetwo = jest.fn();

test('two arguments', () => {
    savetwo('alice', 20)
    savetwo('bob', 30)

    expect(savetwo.mock.calls[0][0]).toBe('alice');
    expect(savetwo.mock.calls[0][1]).toBe(20);
    expect(savetwo.mock.calls[1][0]).toBe('bob');
    expect(savetwo.mock.calls[1][1]).toBe(30);
})


