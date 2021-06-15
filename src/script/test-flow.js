// @flow

// ^ above line is required for flow to work properly (refer to this: https://flow.org/en/docs/getting-started/)

function foo(x: ?number): number {
    if (x) {
        return x;
    }

    // Return default number
    return 2;
}

// test invoking foo with wrong type argument
// foo('this is string');

foo(1);
