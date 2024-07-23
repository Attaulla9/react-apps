/**
 * @param { Number }
 *
 */

export const truncateText = (str) => {
    if (!str) return ;
  const substr = str.substring(0, 50) + "...";
  return substr;
};
