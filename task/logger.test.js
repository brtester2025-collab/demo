import { run } from "./app";
import *  as logger from "./logger"

test('call logs', () => {
    const spy = jest.spyOn(logger, 'log').mockImplementation(() => { });

    run();


    expect(spy).toHaveBeenCalledWith('App started');
    spy.mockRestore();
})