export const weightFormatter = (weight: number) => {
  return weight.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}