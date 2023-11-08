export const convertRating = rating => {
  return Math.round(rating * 10).toFixed(1);
}