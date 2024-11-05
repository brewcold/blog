import { Btn } from '../../interaction/button/btn';
import { Heading } from '../../typography/heading/heading';
import { Spacing } from '../spacing/spacing';
import { View } from '../view/view';
import { BASE, ERROR_BTN } from './error-fallback.css';

export function ErrorFallback({ message, error = null }: { message?: string; error?: Error | null }) {
  return (
    <View styleVariant={BASE}>
      <Heading as="h1">{error?.message || message || '알 수 없는 오류입니다'}</Heading>
      <Spacing size="1rem" />

      <Btn as="Link" href="/" styleVariant={ERROR_BTN}>
        돌아가기
      </Btn>
    </View>
  );
}
