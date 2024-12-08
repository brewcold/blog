import Image from 'next/image';
import { Btn } from '../../basics/button/btn';
import MARK_WHITE from '#/img/github-mark-white.svg';
import { EXTERNAL_LINK, MENU_GITHUB_IMG } from '../navigation/about/about-btn.css';

export function GithubLink({ isPost }: { isPost: boolean }) {
  const MARK = isPost ? null : MARK_WHITE;

  return MARK ? (
    <Btn as="a" href="https://github.com/brewcold" target="_blank" styleVariant={EXTERNAL_LINK}>
      <Image unoptimized className={MENU_GITHUB_IMG} priority={true} alt="brewcold github" src={MARK} />
    </Btn>
  ) : null;
}
