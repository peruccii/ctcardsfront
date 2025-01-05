import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useParamsSet = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  const handle = (paramsSet: string, value: string) => {
    params.set(paramsSet, value);
    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return { handle };
};
