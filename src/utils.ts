export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value: string): number => {
    return +value;
  });

  return new Date(dateParts[2], dateParts[1], dateParts[0]);
};
