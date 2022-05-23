function demo(input) {

    let pattern = /(?:^| )([a-z][a-z0-9\-\._]+@[a-z0-9\-]+(\.[a-z0-9\-]+){1,})/g;

    let result = input.match(pattern);

    console.log(result.join('\n'));

}