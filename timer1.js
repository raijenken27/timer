const argv = process.argv.slice(2);

const scheduleBeep = (timeInSeconds) => {
  if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // Trigger the beep sound
    }, timeInSeconds * 1000); // Convert seconds to milliseconds
  }
};

for (const arg of argv) {
  const timeInSeconds = parseInt(arg, 10);
  scheduleBeep(timeInSeconds);
}
