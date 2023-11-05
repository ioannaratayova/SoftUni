function createCommander() {
    let content = '';

    return {
        append: (s) => content += s,
        removeStart: (n) => content =content.slice(n),
        removeEnd: (n) => content = content.slice(0, content.length - n),
        print: () => console.log(content)
    }
}