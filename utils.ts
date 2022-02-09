export const repeat = (operation: () => void, numberOfTimes: number) => {
  Array.from(Array(numberOfTimes)).forEach(operation);
}
