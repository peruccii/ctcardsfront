import { InvitePlan } from '@/app/enums/invite_plan';
import { InviteType } from '@/app/enums/invite_type';

export interface FormValues {
  title: string;
  sub_title: string;
  message: string;
  email: string;
  url_music: string;
  date: Date;
  card_color: string;
  bg_color: string;
  names: string;
  image_urls: File[];
  invite_type: InviteType;
  payment_method: string;
  createdAt: Date;
  invite_plan: InvitePlan;
}
