import { BlockComponentMap } from '../../types/components';
import { BreadCrumb } from './breadcrumb/breadcrumb';
import { NotionDivider } from './divider/notion-divider';
import { Heading_1 } from './headings/heading_1';
import { Heading_2 } from './headings/heading_2';
import { Heading_3 } from './headings/heading_3';
import { Paragraph } from './paragraph/paragraph';
import { Divider } from '../layout/divider/Divider';
import { BulletedListItem } from './bulleted-list-item/bulleted-list-item';
import { Callout } from './callout/callout';
import { ChildDatabase } from './child-database/child-database';
import { ChildPage } from './child-page/child-page';
import { Column } from './column/column';
import { ColumnList } from './column-list/column-list';
import { NumberedListItem } from './numbered-list-item/numbered-list-item';
import { BulletedListWrapper } from './bulleted-list-item/bulleted-list-wrapper';
import { NumberedListWrapper } from './numbered-list-item/numbered-list-wrapper';
import { Code } from './code/code';
import { NotionImg } from './image/notion-img';
import { NotionFile } from './file/notion-file';
import { Mention } from './mention/mention';
import { NotionText } from './text/text';

export const blockComponentMap: BlockComponentMap = {
  bookmark: Divider,
  breadcrumb: BreadCrumb,
  bulleted_list_item: BulletedListItem,
  bulleted_list_items: BulletedListWrapper,
  callout: Callout,
  child_database: ChildDatabase,
  child_page: ChildPage,
  code: Code,
  column: Column,
  column_list: ColumnList,
  divider: NotionDivider,
  embed: NotionFile,
  equation: Divider,
  file: NotionFile,
  heading_1: Heading_1,
  heading_2: Heading_2,
  heading_3: Heading_3,
  image: NotionImg,
  link_preview: Divider,
  link_to_page: Divider,
  mention: Mention,
  numbered_list_item: NumberedListItem,
  numbered_list_items: NumberedListWrapper,
  paragraph: Paragraph,
  pdf: Divider,
  quote: Divider,
  synced_block: Divider,
  table: Divider,
  table_of_contents: Divider,
  table_row: Divider,
  template: Divider,
  text: NotionText,
  to_do: Divider,
  toggle: Divider,
  unsupported: Divider,
  video: Divider,
};