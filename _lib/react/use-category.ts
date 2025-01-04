import { usePathname } from 'next/navigation';

export const useCategory: () => { path: string; isEngineering: boolean; isStudy: boolean; isPost: boolean } = () => {
  const path = usePathname();
  const isEngineering = path.startsWith('/engineering');
  const isStudy = path.startsWith('/study');
  const isPost = isEngineering ?? (isStudy && path.length > 4);

  return { path, isEngineering, isStudy, isPost };
};
