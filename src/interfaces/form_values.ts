import { InvitePlan } from '@/app/enums/invite_plan';
import { InviteType } from '@/app/enums/invite_type';

export interface FormValues {
  title: string;
  sub_title: string;
  message: string;
  email: string;
  url_music: string | null;
  date: Date;
  invite_type: InviteType;
  invite_plan: InvitePlan;
  images: string[];
}
