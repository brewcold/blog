import { meta } from '@/constants/meta';
import { BASE, FOOTER_COPYRIGHT, FOOTER_LINK } from './footer.css';
import { Txt } from '../../typography/txt/txt';
import { View } from '../view/view';
import { site_env } from '@/env';

export function Footer() {
  return (
    <View styleVariant={BASE}>
      <Txt as="a" target="_blank" href={`${site_env.root}/feed.xml`} styleVariant={FOOTER_LINK}>
        RSS
      </Txt>
    </View>
  );
}
