import { InvitePlan } from '@/app/enums/invite_plan';
import { InviteType } from '@/app/enums/invite_type';

export interface ResponseInvite {
  title: string;
  sub_title: string;
  message: string;
  email: string;
  url_music: string;
  date: Date;
  id: string;
  card_color: string;
  bg_color: string;
  names: string;
  image_urls: string[];
  invite_type: InviteType;
  payment_method: string;
  invite_plan: InvitePlan;
}
