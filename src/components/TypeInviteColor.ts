export const getColorTypeInvite = (type: string) => {
  switch (type) {
    case 'LOVE':
      return '#f56565';
    case 'BESTFRIENDS':
      return '#3B82F6';
    case 'BIRTHDAY':
      return '#F59E0B';
  }
};
