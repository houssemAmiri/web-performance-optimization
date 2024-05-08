function heavyTask() {
    // Simulate a heavy computational task
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += Math.sqrt(i);
    }
    return result;
}
heavyTask()