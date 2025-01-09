export function verifySelects(step: number, params: URLSearchParams): boolean {
  switch (step) {
    case 0: {
      if (params.get('type') === null) {
        return false;
      }
      break;
    }
    case 1: {
      if (params.get('plan') === null) {
        return false;
      }
      break;
    }
  }
  return true;
}
